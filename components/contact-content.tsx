"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

const reachUs = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@saassquared.com",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
  },
]

export function ContactContent() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: ContactFormValues) {
    // Placeholder: in production you would call an API route or third-party service
    console.log(values)
    toast.success("Message sent! We'll get back to you within 24 hours.")
    form.reset()
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
      <AnimateOnScroll>
        <div
          className="overflow-hidden rounded-3xl border border-border/40 bg-card px-8 py-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] md:px-12 md:py-12"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #F7FAFF 50%, #EAF4FF 100%)",
          }}
        >
          <h2 className="text-xl font-semibold text-foreground">Send a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill out the form below and we&apos;ll respond as soon as we can.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
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
                      <Input placeholder="What's this about?" {...field} />
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
                      <Textarea
                        placeholder="Your message..."
                        className="min-h-[140px] resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="lg"
                className="rounded-full px-8"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </Form>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll delay={150}>
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold text-foreground">Reach us</h3>
          <div className="space-y-4">
            {reachUs.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/80 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  )
}
