// Authentic worldwide boat marketplace documentation requirements
export const documents = {
    // ------------------------------------------------------------------------
    // 1. COMMERCIAL MARINE DEALERS & YACHT BROKERS
    // ------------------------------------------------------------------------
    cr: {
        id: "cr",
        label: "Commercial Registration (CR) / Marine Trade License",
        required: true,
        title: "Commercial Marine Trade Registry",
        meta: "PDF . 240kb",
        fileName: "Marine_Trade_Registry_CR.pdf",
        hasFile: true,
        roles: ["Dealer", "Broker"],
    },
    companyLicense: {
        id: "companyLicense",
        label: "Yacht Brokerage / Marine Dealership License",
        required: true,
        title: "Official Marine Dealership Permit",
        meta: "PDF . 210kb",
        fileName: "Yacht_Brokerage_Permit.pdf",
        hasFile: true,
        roles: ["Dealer", "Broker"],
    },
    taxCert: {
        id: "taxCert",
        label: "VAT / Tax Registration Certificate",
        required: true,
        title: "Tax & VAT Compliance Certificate",
        meta: "PDF . 180kb",
        fileName: "VAT_Tax_Certificate.pdf",
        hasFile: true,
        roles: ["Dealer", "Broker"],
    },
    marineInsurance: {
        id: "marineInsurance",
        label: "Marine Commercial Liability & Escrow Insurance",
        required: false,
        title: "Commercial Marine Escrow Policy",
        meta: "PDF . 320kb",
        fileName: "Marine_Liability_Insurance.pdf",
        hasFile: true,
        roles: ["Dealer", "Broker"],
    },

    // ------------------------------------------------------------------------
    // 2. PRIVATE BOAT SELLERS
    // ------------------------------------------------------------------------
    vesselReg: {
        id: "vesselReg",
        label: "Vessel Certificate of Documentation (Coast Guard / Flag Registry)",
        required: true,
        title: "Official Vessel Registry (HIN Verified)",
        meta: "PDF . 340kb",
        fileName: "Vessel_CoastGuard_Registration.pdf",
        hasFile: true,
        roles: ["Private Seller"],
    },
    billOfSale: {
        id: "billOfSale",
        label: "Bill of Sale / Manufacturer Statement of Origin (MSO)",
        required: true,
        title: "Notarized Proof of Vessel Ownership",
        meta: "PDF . 290kb",
        fileName: "Notarized_Bill_of_Sale.pdf",
        hasFile: true,
        roles: ["Private Seller"],
    },
    sellerId: {
        id: "sellerId",
        label: "Owner Government Photo ID / Passport (KYC)",
        required: true,
        title: "Owner Identity Verification Document",
        meta: "PDF . 220kb",
        fileName: "Owner_Government_Passport.pdf",
        hasFile: true,
        roles: ["Private Seller"],
    },
    marineSurvey: {
        id: "marineSurvey",
        label: "Marine Condition & Valuation Survey (SAMS / NAMS Accredited)",
        required: false,
        title: "Certified Marine Surveyor Inspection Report",
        meta: "PDF . 1.2mb",
        fileName: "Marine_Survey_Inspection_2026.pdf",
        hasFile: true,
        roles: ["Private Seller"],
    },

    // ------------------------------------------------------------------------
    // 3. BOAT BUYERS
    // ------------------------------------------------------------------------
    buyerId: {
        id: "buyerId",
        label: "Government Photo ID / Passport (KYC & Anti-Money Laundering)",
        required: true,
        title: "Buyer Verification Document",
        meta: "PDF . 220kb",
        fileName: "Buyer_Government_ID.pdf",
        hasFile: true,
        roles: ["Buyer"],
    },
    proofAddress: {
        id: "proofAddress",
        label: "Proof of Residential Address (for Vessel Registration & Flag Transfer)",
        required: true,
        title: "Residential Utility Certificate",
        meta: "PDF . 190kb",
        fileName: "Proof_of_Residence_Utility.pdf",
        hasFile: true,
        roles: ["Buyer"],
    },
    boatingLicense: {
        id: "boatingLicense",
        label: "Boater Safety License / Captain's Permit / ICC",
        required: true,
        title: "International Marine Operator License (ICC)",
        meta: "PDF . 175kb",
        fileName: "International_Boater_License.pdf",
        hasFile: true,
        roles: ["Buyer"],
    },
    proofFunds: {
        id: "proofFunds",
        label: "Proof of Funds / Marine Loan Pre-Approval Letter",
        required: false,
        title: "Bank Escrow Pre-Approval Clearance",
        meta: "PDF . 210kb",
        fileName: "Marine_Escrow_Preapproval.pdf",
        hasFile: true,
        roles: ["Buyer"],
    },
}
