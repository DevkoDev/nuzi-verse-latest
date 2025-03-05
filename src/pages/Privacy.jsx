import PageFooter from "../compoments/PageFooter";
import PageNav from "../compoments/PageNav";
import Canvas from "../compoments/Background";
import "./Privacy.css";

function privacy() {
  return (
    <div>
      <Canvas />
      <PageNav />
      <div className="w-100 py-5">
        <div className="d-block text-justify w-100 container my-5 py-5">
          <h1 className="text-center w-100">NAKARMAZ Privacy Notice</h1>
          <p>
            NAKARMAZ is committed to protecting the privacy and personal data of
            its users. This Privacy Notice outlines how we collect, process,
            store, and protect your information in compliance with the General
            Data Protection Regulation (GDPR) and other relevant privacy
            regulations. As a web3-focused entity, NAKARMAZ ensures transparency
            and security in handling data while offering decentralized features
            and blockchain interactions.
          </p>
          <h2 className="mt-5">1. Purpose and Updates</h2>
          <p className="ps-3">
            This Privacy Notice explains how NAKARMAZ handles your personal data
            when you use our website and web3 tools. By accessing our services,
            you agree to the terms outlined here. We may update this Notice to
            reflect changes in our practices or regulatory requirements. Updates
            will be prominently displayed on this page.
          </p>
          <h2 className="mt-5">2. Data Collection</h2>
          <div className="ps-3">
            <p>
              We collect two primary types of data: Registration Data and Usage
              Data.
            </p>
            <h5>a) Registration Data</h5>
            <p className="ps-3">
              This is information you provide when creating an account on
              NAKARMAZ, including:
            </p>
            <p className="ps-5">- Username</p>
            <p className="ps-5">- Full name (optional)</p>
            <p className="ps-5">- Gender (optional)</p>
            <p className="ps-5">- Date of birth (optional)</p>
            <p className="ps-5">- Hometown (optional)</p>
            <p className="ps-5">- A valid email address</p>
            <p className="ps-3">
              You have the option to control the visibility of your personal
              information through your account settings. It is your
              responsibility to ensure the accuracy of the information provided.
            </p>
            <h5>b) Usage Data</h5>
            <p className="ps-3">
              We automatically collect information when you interact with our
              website and services. This includes:
            </p>
            <p className="ps-5">- Device and browser information</p>
            <p className="ps-5">- IP address (pseudonymized where possible)</p>
            <p className="ps-5">- Interaction data with NAKARMAZ services</p>
            <p className="ps-5">- Cookies and similar tracking technologies</p>
            <p className="ps-3">
              This data helps us understand how users interact with our services
              and improve their functionality. Usage Data is generally
              anonymized or aggregated for analysis.
            </p>
          </div>
          <h2 className="mt-5">3. Purpose of Data Processing</h2>
          <div className="ps-3">
            <p>
              We process your data to provide, maintain, and improve NAKARMAZ
              services and comply with legal obligations. Specifically:
            </p>
            <h5>a) Registration Data Processing</h5>
            <p className="ps-3">- To create and manage your account</p>
            <p className="ps-3">
              - To enable participation in our decentralized ecosystem and
              access blockchain-based features
            </p>
            <p className="ps-3">
              - To facilitate community interactions, comments, and ratings on
              the platform
            </p>
            <p className="ps-3">
              - To send service-related notifications or newsletters (which you
              can opt out of)
            </p>
            <h5>b) Usage Data Processing</h5>
            <p className="ps-3">
              - To analyze site traffic and user engagement
            </p>
            <p className="ps-3">
              - To enhance platform performance and user experience
            </p>
            <p className="ps-3">
              - To conduct marketing and promotional campaigns (subject to user
              consent)
            </p>
          </div>
          <h2 className="mt-5">4. Data Sharing</h2>
          <div className="ps-3">
            <p>
              NAKARMAZ does not sell or rent your personal data to third
              parties. However, we may share your data in the following
              circumstances:
            </p>
            <p className="ps-3">
              - Service Providers: We may share data with trusted partners who
              assist in operating our services, subject to strict
              confidentiality agreements.
            </p>
            <p className="ps-3">
              - Legal Compliance: We may disclose your data to comply with legal
              obligations, regulatory authorities, or court orders.
            </p>
            <p className="ps-3">
              - Blockchain Transactions: Certain interactions on NAKARMAZ
              involving blockchain technology may be publicly visible and
              immutable.
            </p>
          </div>
          <h2 className="mt-5">5. Data Security</h2>
          <p className="ps-3">
            We implement robust technical and organizational measures to
            safeguard your data against unauthorized access, alteration, or
            destruction. Your account is protected by a password, which you are
            responsible for keeping confidential. We also employ encryption and
            other security protocols to protect sensitive information.
          </p>
          <h2 className="mt-5"></h2>
          <p className="ps-3 mb-5 pb-5">
            We retain your data for as long as necessary to provide you with our
            services and comply with legal obligations. In the event of account
            deactivation, your personal data and associated content will be
            retained for one year before being permanently deleted from our
            systems.
          </p>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default privacy;
