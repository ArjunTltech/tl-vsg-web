import CtaOne from "@/components/CtaSection/CtaOne";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { TalentEdgeSolution } from "@/data/servicesSection";
import React from "react";

const { title } = TalentEdgeSolution;

const TalentEdgeSolutions = () => {
  return (
    <Layout pageTitle={title}>
      <Header />
      <PageHeader
        page="Service Details"
        title={title}
        parent="Services"
        parentHref="/services"
      />
      <ServiceDetails service={TalentEdgeSolution} />
      <CtaOne />
    </Layout>
  );
};

export default TalentEdgeSolutions;
