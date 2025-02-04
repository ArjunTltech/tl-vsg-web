import ContactPage from "@/components/Contact/ContactPage";
import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import TermsOfUsePolicy from "@/components/TermsOfUse/TermsOfUsePolicy";
import bg_terms from "@/images/backgrounds/terms-banner-image.jpg";
import React from "react";

const TermsOfUse = () => {
  return (
    <Layout pageTitle="Terms Of Use Policy">
      <Header />
      <PageHeader title="Terms and Conditions & Disclaimer" bgImage={bg_terms} />
      <TermsOfUsePolicy />
      {/* <ContactPage /> */}
      <CtaOne />
    </Layout>
  );
};

export default TermsOfUse;
