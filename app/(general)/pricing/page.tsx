import { Metadata } from "next";

export const metadata : Metadata = {
 title: 'SEO title',
 description: 'SEO Description',
 keywords: ['Contact Page', '...']
};

export default function PricingPage() {
    return(
        <span className="text-7xl">Pricing!</span>
    );
}