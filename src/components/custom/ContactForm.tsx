'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner'; 
import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema, ContactFormValues } from '@/lib/validationSchemas';
import { useState } from 'react';
import { Loader2 } from 'lucide-react'; 

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsLoading(true);
    try {
      console.log('Form submitted with values:', values);
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.success('Message sent successfully!', {
        description: 'Thank you for reaching out! I will get back to you soon.',
      });
      form.reset(); 
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message.', {
        description: error.message || 'Please try again later or contact me via other channels.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const formFieldVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-xl mx-auto p-6 bg-card rounded-lg shadow-lg"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }} // Stagger children
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <motion.div variants={formFieldVariants}>
                  <Input placeholder="John Doe" {...field} disabled={isLoading} />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <motion.div variants={formFieldVariants}>
                  <Input type="email" placeholder="john.doe@example.com" {...field} disabled={isLoading} />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <motion.div variants={formFieldVariants}>
                  <Input placeholder="Inquiry about collaboration" {...field} disabled={isLoading} />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <motion.div variants={formFieldVariants}>
                  <Textarea placeholder="I'd like to discuss a potential project..." rows={5} {...field} disabled={isLoading} />
                </motion.div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <motion.div variants={formFieldVariants}>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </motion.div>
      </motion.form>
    </Form>
  );
};

export default ContactForm;