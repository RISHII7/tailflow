"use client"

import { useState } from "react";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { WorkspaceSchema } from "@/app/schemas/workspace";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function CreateWorkspace() {
    const [open, setOpen] = useState(false);

    const form = useForm({
        resolver: zodResolver(WorkspaceSchema),
        defaultValues: {
            name: "",
        },
    });

    function onSubmit() {
        console.log("Data");
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                        <Button 
                            variant="ghost" 
                            size="icon"
                            className="size-12 rounded-xl border-2 border-dashed border-muted-foreground/50 text-muted-foreground hover:border-muted-foreground hover:text-foreground hover:rounded-lg transition-all duration-200"
                        >
                            <Plus className="size-5" />
                        </Button>
                    </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent side="right">
                    <p>Create Workspace</p>
                </TooltipContent>
            </Tooltip>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Workspace</DialogTitle>
                    <DialogDescription>
                        Create a new workspace to get started.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                    >
                        <FormField 
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                      <FormControl>
                                        <Input 
                                            placeholder="My Workspace"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit">
                            Create Workspace
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};