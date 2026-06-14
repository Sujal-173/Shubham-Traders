"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Select, Textarea } from "@/components/ui/field";

export function LeadForm({ source = "Website Lead Form" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function submit(formData: FormData) {
    setStatus("loading");
    formData.set("source", source);
    const response = await fetch("/api/lead", { method: "POST", body: formData });
    setStatus(response.ok ? "success" : "error");
  }

  return (
    <form action={submit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Name</Label>
          <Input name="name" required placeholder="Your name" />
        </div>
        <div>
          <Label>Phone</Label>
          <Input name="phone" required placeholder="+91" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Project Type</Label>
          <Select name="projectType" defaultValue="Residential Solar">
            <option>Residential Solar</option>
            <option>Commercial Solar</option>
            <option>Industrial Solar</option>
            <option>Agricultural Solar</option>
          </Select>
        </div>
        <div>
          <Label>City</Label>
          <Input name="city" placeholder="Kasrawad, Khargone..." />
        </div>
      </div>
      <div>
        <Label>Requirement</Label>
        <Textarea name="message" placeholder="Monthly bill, rooftop size, capacity, or subsidy query" />
      </div>
      <Button disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Request Consultation"}</Button>
      {status === "success" ? <p className="text-sm font-bold text-energy">Thanks. Shubham Traders will contact you shortly.</p> : null}
      {status === "error" ? <p className="text-sm font-bold text-red-600">Something went wrong. Please call or WhatsApp us directly.</p> : null}
    </form>
  );
}
