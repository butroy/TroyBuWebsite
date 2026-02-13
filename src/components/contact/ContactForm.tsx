'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Failed to send message'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-green-800">Message Sent!</h3>
        <p className="mt-2 text-sm text-green-700">
          Thank you for reaching out. I&apos;ll get back to you as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-medium text-green-700 underline hover:text-green-900"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-black">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none resize-none"
          placeholder="Your message..."
        />
      </div>
      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
