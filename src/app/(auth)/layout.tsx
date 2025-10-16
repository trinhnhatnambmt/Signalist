import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
                <Link href="/" className="auth-logo">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="logo"
                        width={140}
                        height={32}
                        className="h-8 w-auto cursor-pointer"
                    />
                </Link>
                <div className="pb-6 lg:pb-8 flex-1">{children}</div>
            </section>
            <section className="auth-right-section">
                <div className="z-10 relative lg:mt-4 lg:mb-16">
                    <blockquote className="auth-blockquote">
                        Signalist turned my watchlist into a winning list. The
                        alerts are spot-on, and I feel more confident making
                        moves in the market
                    </blockquote>
                    <div className="flex items-center justify-between ">
                        <div>
                            <cite className="auth-testimonial-author">
                                - Ethan R.
                            </cite>
                            <p className="max-md:text-xs text-gray-500">
                                Retail Investor
                            </p>
                        </div>
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Image
                                    src="/assets/icons/star.svg"
                                    alt="start"
                                    key={star}
                                    width={60}
                                    height={60}
                                    className="w-5 h-5"
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <Image
                            src="/assets/images/dashboard.png"
                            alt="dashboardImage"
                            width={1440}
                            height={1150}
                            className="auth-dashboard-preview absolute top-0"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Layout;
