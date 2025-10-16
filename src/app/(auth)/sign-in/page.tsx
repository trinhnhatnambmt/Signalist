"use client";

import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

const SignInPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onBlur",
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <h1 className="form-title">Welcome back</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    register={register}
                    error={errors.email}
                    validation={{
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address",
                        },
                    }}
                />
                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter a strong password"
                    register={register}
                    error={errors.password}
                    type="password"
                    validation={{
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message:
                                "Password must be at least 8 characters long",
                        },
                    }}
                />
                <Button
                    type="submit"
                    className="yellow-btn w-full mt-5"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Login to your account..." : "Login"}
                </Button>

                <FooterLink
                    linkText="Sign up"
                    href="/sign-up"
                    text="Don't have an account?"
                />
            </form>
        </>
    );
};

export default SignInPage;
