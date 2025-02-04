import CtaOne from "@/components/CtaSection/CtaOne";
import CtaService from "@/components/CtaSection/CtaService";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/Reuseable/PageHeader";
import ServiceDetails from "@/components/ServicesSection/ServiceDetails";
import { TalentEdgeSolution } from "@/data/servicesSection";
import bg_service from "@/images/backgrounds/service-banner-image.jpg";
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
        bgImage={bg_service}
      />
      <ServiceDetails service={TalentEdgeSolution} />
      <CtaService/>
      {/* <CtaOne /> */}
    </Layout>
  );
};

export default TalentEdgeSolutions;
