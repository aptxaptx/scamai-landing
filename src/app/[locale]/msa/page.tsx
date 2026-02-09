export default function MSAPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6" style={{ paddingTop: '140px' }}>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#245FFF]">
            LEGAL
          </p>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Master Subscription Agreement
          </h1>
          <p className="mb-2 text-lg text-gray-300">
            ScamAI Platform Services
          </p>
          <p className="text-sm text-gray-500">Last revised: August 14, 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <p className="text-gray-300 leading-relaxed mb-6">
                This ScamAI Master Subscription Agreement (&ldquo;MSA&rdquo;) is effective as of the effective date of an applicable signed order form (&ldquo;Order Form&rdquo; and such date the &ldquo;Effective Date&rdquo;) and is by and between Reality Inc., a Delaware corporation with a place of business at 2150 Shattuck Ave, Berkeley, CA 94704 (&ldquo;Company&rdquo;), and the customer set forth on the Order Form and accepts this MSA (each, a &ldquo;Customer&rdquo;). In the event of any inconsistency or conflict between the terms of the MSA and the terms of any Order Form, the terms of the Order Form control. Unless as otherwise indicated on an applicable Order Form, certain of Company&rsquo;s obligations under this MSA will not apply, as further described below.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The &ldquo;Services&rdquo; mean the ScamAI platform products and services that are ordered by Customer from Company in an Order Form referencing this MSA. Services may include trial access, design partnership services, custom development, and implementation services as specified in the applicable Order Form. Services exclude any products or services provided by third parties, even if Customer has connected those products or services to the Services. Subject to the terms and conditions of this MSA, Company will make the Services available to Customer during the Term.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">1. SaaS Services and Support</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1.1 Service Provision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Subject to the terms of this Agreement, Company will use commercially reasonable efforts to provide Customer the Services. As part of the registration process, Customer will identify an administrative user name and password for Customer&rsquo;s Company account. Company reserves the right to refuse registration of, or cancel passwords it deems inappropriate.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1.3 Trial Services</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For trial or evaluation services, Company may provide limited access to the Services for evaluation purposes as specified in the Order Form. Trial services may have reduced functionality, limited support, or other restrictions as determined by Company. Trial periods and terms shall be specified in the applicable Order Form.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">1.4 Design Partnership and Pilot Services</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    For design partnership and pilot engagements, Company may provide custom development, integration services, early access to features, pilot implementations, proof-of-concept deployments, or other specialized services as detailed in the Order Form. Design partnership and pilot terms, deliverables, success criteria, and intellectual property arrangements may be further specified in a separate Statement of Work or addendum.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Subject to the terms hereof, Company will provide Customer with reasonable technical support services via electronic mail or via designated communication channels on weekdays during the hours of 9:00 am through 6:00 pm Pacific time, with the exclusion of Federal Holidays (&ldquo;Support Hours&rdquo;). Customer may initiate a helpdesk ticket any time by emailing support@scam.ai or through the designated support portal. Company will use commercially reasonable efforts to respond to all helpdesk tickets within one (1) business day.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">2. Restrictions and Responsibilities</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2.1 Usage Restrictions</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Customer will not, directly or indirectly: reverse engineer, decompile, disassemble or otherwise attempt to discover the source code, object code or underlying structure, ideas, know-how or algorithms relevant to the Services or any software, documentation or data related to the Services (&ldquo;Software&rdquo;); modify, translate, or create derivative works based on the Services or any Software (except to the extent expressly permitted by Company or authorized within the Services); use the Services or any Software for timesharing or service bureau purposes or otherwise for the benefit of a third party; or remove any proprietary notices or labels.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2.2 Export Control Compliance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Further, Customer may not remove or export from the United States or allow the export or re-export of the Services, Software or anything related thereto, or any direct product thereof in violation of any restrictions, laws or regulations of the United States Department of Commerce, the United States Department of Treasury Office of Foreign Assets Control, or any other United States or foreign agency or authority. As defined in FAR section 2.101, the Software and documentation are &ldquo;commercial items&rdquo; and according to DFAR section 252.227-7014(a)(1) and (5) are deemed to be &ldquo;commercial computer software&rdquo; and &ldquo;commercial computer software documentation.&rdquo; Consistent with DFAR section 227.7202 and FAR section 12.212, any use modification, reproduction, release, performance, display, or disclosure of such commercial software or commercial software documentation by the U.S. Government will be governed solely by the terms of this Agreement and will be prohibited except to the extent expressly permitted by the terms of this Agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2.3 Compliance and Indemnification</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Customer represents, covenants, and warrants that Customer will use the Services only in compliance with Company&rsquo;s standard published policies then in effect (the &ldquo;Policy&rdquo;) and all applicable laws and regulations. Customer hereby agrees to indemnify and hold harmless Company against any damages, losses, liabilities, settlements and expenses (including without limitation costs and attorneys&rsquo; fees) in connection with any claim or action that arises from an alleged violation of the foregoing or otherwise from Customer&rsquo;s use of Services. Although Company has no obligation to monitor Customer&rsquo;s use of the Services, Company may do so and may prohibit any use of the Services it believes may be (or alleged to be) in violation of the foregoing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">2.4 Customer Equipment and Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Customer shall be responsible for obtaining and maintaining any equipment and ancillary services needed to connect to, access or otherwise use the Services, including, without limitation, modems, hardware, servers, software, operating systems, networking, web servers and the like (collectively, &ldquo;Equipment&rdquo;). Customer shall also be responsible for maintaining the security of the Equipment, Customer account, passwords (including but not limited to administrative and user passwords) and files, and for all uses of Customer account or the Equipment with or without Customer&rsquo;s knowledge or consent.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">3. Confidentiality; Proprietary Rights</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3.1 Confidential Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Each party (the &ldquo;Receiving Party&rdquo;) understands that the other party (the &ldquo;Disclosing Party&rdquo;) has disclosed or may disclose business, technical or financial information relating to the Disclosing Party&rsquo;s business (hereinafter referred to as &ldquo;Proprietary Information&rdquo; of the Disclosing Party). Proprietary Information of Company includes non-public information regarding features, functionality and performance of the Service. Proprietary Information of Customer includes non-public data provided by Customer to Company to enable the provision of the Services (&ldquo;Customer Data&rdquo;). The Receiving Party agrees: (i) to take reasonable precautions to protect such Proprietary Information, and (ii) not to use (except in performance of the Services or as otherwise permitted herein) or divulge to any third person any such Proprietary Information. The Disclosing Party agrees that the foregoing shall not apply with respect to any information after five (5) years following the disclosure thereof or any information that the Receiving Party can document (a) is or becomes generally available to the public, or (b) was in its possession or known by it prior to receipt from the Disclosing Party, or (c) was rightfully disclosed to it without restriction by a third party, or (d) was independently developed without use of any Proprietary Information of the Disclosing Party or (e) is required to be disclosed by law.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3.2 Ownership Rights</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Customer shall own all right, title and interest in and to the Customer Data, as well as any data that is based on or derived from the Customer Data and provided to Customer as part of the Services. Company shall own and retain all right, title and interest in and to (a) the Services and Software, all improvements, enhancements or modifications thereto, (b) any software, applications, inventions or other technology developed in connection with Implementation Services or support, and (c) all intellectual property rights related to any of the foregoing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">3.4 Custom Development and Design Partner IP</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For custom development work or services provided to design partners, intellectual property ownership and licensing rights shall be specified in the applicable Order Form or Statement of Work. Company retains ownership of any improvements to the core Services platform and all underlying technology. Design partners retain ownership of their proprietary data, business processes, and pre-existing intellectual property. Any jointly developed IP or learnings that enhance the core platform become Company property, while Customer-specific business logic or data models may be retained by Customer as detailed in the applicable Order Form.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Notwithstanding anything to the contrary, Company shall have the right collect and analyze data and other information relating to the provision, use and performance of various aspects of the Services and related systems and technologies (including, without limitation, information concerning Customer Data and data derived therefrom), and Company will be free (during and after the term hereof) to (i) use such information and data to improve and enhance the Services and for other development, diagnostic and corrective purposes in connection with the Services and other Company offerings, and (ii) disclose such data solely in aggregate or other de-identified form in connection with its business. No rights or licenses are granted except as expressly set forth herein.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">4. Payment of Fees</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">4.1 Fee Payment</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Customer will pay Company the then applicable fees described in the Order Form for the Services in accordance with the terms therein (the &ldquo;Fees&rdquo;). If Customer&rsquo;s use of the Services exceeds the Service Capacity set forth on the Order Form or otherwise requires the payment of additional fees (per the terms of this Agreement), Customer shall be billed for such usage and Customer agrees to pay the additional fees in the manner provided herein. Company reserves the right to change the Fees or applicable charges and to institute new charges and Fees at the end of the Initial Service Term or then current renewal term, upon thirty (30) days prior notice to Customer (which may be sent by email). If Customer believes that Company has billed Customer incorrectly, Customer must contact Company no later than 30 days after the closing date on the first billing statement in which the error or problem appeared, in order to receive an adjustment or credit. Inquiries should be directed to Company&rsquo;s customer support department.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">4.3 Trial, Design Partnership, and Pilot Fees</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Trial services may be provided at no cost or at reduced rates as specified in the Order Form. Design partnership and pilot engagements may involve alternative fee structures, milestone-based payments, success-based pricing, or revenue sharing arrangements as detailed in the applicable Order Form or Statement of Work.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Company may choose to bill through an invoice, in which case, full payment for invoices issued in any given month must be received by Company seven (7) days after the mailing date of the invoice. Unpaid amounts are subject to a finance charge of 1.5% per month on any outstanding balance, or the maximum permitted by law, whichever is lower, plus all expenses of collection and may result in immediate termination of Service. Customer shall be responsible for all taxes associated with Services other than U.S. taxes based on Company&rsquo;s net income.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">5. Term and Termination</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">5.1 Agreement Term</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Subject to earlier termination as provided below, this Agreement is for the Initial Service Term as specified in the Order Form, and shall be automatically renewed for additional periods of the same duration as the Initial Service Term (collectively, the &ldquo;Term&rdquo;), unless either party requests termination at least thirty (30) days prior to the end of the then-current term.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">5.3 Trial and Design Partner Transition</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For trial customers converting to paid subscriptions, the Initial Service Term shall commence upon execution of the paid service Order Form. For design partners transitioning to standard service, the parties will negotiate transition terms including: (a) migration of custom features to production, (b) ongoing support and maintenance arrangements, (c) any IP licensing for Customer-specific customizations, and (d) standard service pricing and terms. All transition arrangements shall be documented in a separate agreement or addendum.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    In addition to any other remedies it may have, either party may also terminate this Agreement upon thirty (30) days&rsquo; notice (or without notice in the case of nonpayment), if the other party materially breaches any of the terms or conditions of this Agreement. Customer will pay in full for the Services up to and including the last day on which the Services are provided. All sections of this Agreement which by their nature should survive termination will survive termination, including, without limitation, accrued rights to payment, confidentiality obligations, warranty disclaimers, and limitations of liability.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">6. Warranty and Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                Company shall use reasonable efforts consistent with prevailing industry standards to maintain the Services in a manner which minimizes errors and interruptions in the Services and shall perform the Implementation Services in a professional and workmanlike manner. Services may be temporarily unavailable for scheduled maintenance or for unscheduled emergency maintenance, either by Company or by third-party providers, or because of other causes beyond Company&rsquo;s reasonable control, but Company shall use reasonable efforts to provide advance notice in writing or by e-mail of any scheduled service disruption. HOWEVER, COMPANY DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR FREE; NOR DOES IT MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE SERVICES. EXCEPT AS EXPRESSLY SET FORTH IN THIS SECTION, THE SERVICES AND IMPLEMENTATION SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">7. Indemnity</h2>
              <p className="text-gray-300 leading-relaxed">
                Company shall hold Customer harmless from liability to third parties resulting from infringement by the Service of any United States patent or any copyright or misappropriation of any trade secret, provided Company is promptly notified of any and all threats, claims and proceedings related thereto and given reasonable assistance and the opportunity to assume sole control over defense and settlement; Company will not be responsible for any settlement it does not approve in writing. The foregoing obligations do not apply with respect to portions or components of the Service (i) not supplied by Company, (ii) made in whole or in part in accordance with Customer specifications, (iii) that are modified after delivery by Company, (iv) combined with other products, processes or materials where the alleged infringement relates to such combination, (v) where Customer continues allegedly infringing activity after being notified thereof or after being informed of modifications that would have avoided the alleged infringement, or (vi) where Customer&rsquo;s use of the Service is not strictly in accordance with this Agreement. If, due to a claim of infringement, the Services are held by a court of competent jurisdiction to be or are believed by Company to be infringing, Company may, at its option and expense (a) replace or modify the Service to be non-infringing provided that such modification or replacement contains substantially similar features and functionality, (b) obtain for Customer a license to continue using the Service, or (c) if neither of the foregoing is commercially practicable, terminate this Agreement and Customer&rsquo;s rights hereunder and provide Customer a refund of any prepaid, unused fees for the Service.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">8. Limitation of Liability</h2>
              <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6">
                <p className="text-gray-200 font-medium">
                  NOTWITHSTANDING ANYTHING TO THE CONTRARY, EXCEPT FOR BODILY INJURY OF A PERSON, COMPANY AND ITS SUPPLIERS (INCLUDING BUT NOT LIMITED TO ALL EQUIPMENT AND TECHNOLOGY SUPPLIERS), OFFICERS, AFFILIATES, REPRESENTATIVES, CONTRACTORS AND EMPLOYEES SHALL NOT BE RESPONSIBLE OR LIABLE WITH RESPECT TO ANY SUBJECT MATTER OF THIS AGREEMENT OR TERMS AND CONDITIONS RELATED THERETO UNDER ANY CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER THEORY: (A) FOR ERROR OR INTERRUPTION OF USE OR FOR LOSS OR INACCURACY OR CORRUPTION OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY OR LOSS OF BUSINESS; (B) FOR ANY INDIRECT, EXEMPLARY, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES; (C) FOR ANY MATTER BEYOND COMPANY&rsquo;S REASONABLE CONTROL; OR (D) FOR ANY AMOUNTS THAT, TOGETHER WITH AMOUNTS ASSOCIATED WITH ALL OTHER CLAIMS, EXCEED THE FEES PAID BY CUSTOMER TO COMPANY FOR THE SERVICES UNDER THIS AGREEMENT IN THE 12 MONTHS PRIOR TO THE ACT THAT GAVE RISE TO THE LIABILITY, IN EACH CASE, WHETHER OR NOT COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">9. Miscellaneous</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">9.1 Severability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If any provision of this Agreement is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that this Agreement will otherwise remain in full force and effect and enforceable.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">9.2 Assignment</h3>
                  <p className="text-gray-300 leading-relaxed">
                    This Agreement is not assignable, transferable or sublicensable by Customer except with Company&rsquo;s prior written consent. Company may transfer and assign any of its rights and obligations under this Agreement without consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">9.3 Entire Agreement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    This Agreement is the complete and exclusive statement of the mutual understanding of the parties and supersedes and cancels all previous written and oral agreements, communications and other understandings relating to the subject matter of this Agreement, and that all waivers and modifications must be in a writing signed by both parties, except as otherwise provided herein.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">9.4 No Agency</h3>
                  <p className="text-gray-300 leading-relaxed">
                    No agency, partnership, joint venture, or employment is created as a result of this Agreement and Customer does not have any authority of any kind to bind Company in any respect whatsoever.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">9.5 Attorney Fees</h3>
                  <p className="text-gray-300 leading-relaxed">
                    In any action or proceeding to enforce rights under this Agreement, the prevailing party will be entitled to recover costs and attorneys&rsquo; fees.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">9.6 Notices</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All notices under this Agreement will be in writing and will be deemed to have been duly given when received, if personally delivered; when receipt is electronically confirmed, if transmitted by facsimile or e-mail; the day after it is sent, if sent for next day delivery by recognized overnight delivery service; and upon receipt, if sent by certified or registered mail, return receipt requested.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">9.7 Governing Law</h3>
                  <p className="text-gray-300 leading-relaxed">
                    This Agreement shall be governed by the laws of the State of Delaware without regard to its conflict of laws provisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">9.8 Marketing Rights</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Company may use Customer&rsquo;s name, logo, and trademarks solely to identify Customer as a client of Company on Company&rsquo;s website and other marketing materials and in accordance with Customer&rsquo;s trademark usage guidelines.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">9.9 Amendment Rights</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Company may amend this MSA from time to time, in which case the new MSA will supersede prior versions. Company will notify Customer not less than ten (10) days prior to the effective date of any such amendment and Customer&rsquo;s continued use of the Services following the effective date of any such amendment may be relied upon by Company as consent to any such amendment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">9.10 Force Majeure Reference</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Force majeure events are governed by Section 12 of this Agreement.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">10. Data Privacy and Compliance</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">10.1 GDPR Compliance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Company will process Customer Data in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR) where applicable. Company will: (a) implement appropriate technical and organizational measures to protect Customer Data, (b) process Customer Data only as necessary to provide the Services and as instructed by Customer, (c) notify Customer of any data breaches affecting Customer Data within 72 hours of discovery, (d) assist Customer in responding to data subject requests, and (e) maintain records of processing activities. Customer acts as the data controller and Company acts as the data processor for Customer Data.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">10.2 SOC 2 Compliance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Company maintains SOC 2 Type II compliance and will provide Customer with current SOC 2 reports upon request and execution of appropriate confidentiality agreements. Company will notify Customer of any material changes to its SOC 2 compliance status.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">10.3 Data Processing Agreement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The parties will execute a separate Data Processing Agreement (DPA) that details the specific terms for processing of personal data, including data subject rights, cross-border transfers, and sub-processor arrangements. The DPA is incorporated by reference into this Agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">10.4 Security Measures</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Company implements industry-standard security measures including: (a) encryption of data in transit and at rest, (b) access controls and authentication, (c) regular security assessments and penetration testing, (d) employee security training, and (e) incident response procedures. Customer is responsible for properly configuring and using security features made available through the Services.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">11. Service Level Agreements</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">11.1 Uptime Commitment</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Company will use commercially reasonable efforts to maintain Services availability of at least 99.5% per calendar month, calculated as the percentage of time the Services are available during the month, excluding: (a) planned maintenance performed during designated maintenance windows, (b) outages caused by Customer&rsquo;s actions or configurations, (c) force majeure events, and (d) third-party service provider outages beyond Company&rsquo;s control.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">11.2 Performance Metrics</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Company will monitor key performance indicators including: (a) system response times, (b) API response rates, (c) data processing throughput, and (d) service availability. Performance reports will be available to Customer through the Services dashboard or upon request.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">11.3 Service Credits</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If monthly uptime falls below the 99.5% commitment, Customer may be eligible for service credits equal to: (a) 5% of monthly fees for uptime between 99.0% - 99.49%, (b) 10% of monthly fees for uptime between 98.0% - 98.99%, (c) 25% of monthly fees for uptime below 98.0%. Service credits are Customer&rsquo;s sole remedy for availability failures and must be requested within 30 days of the outage.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">11.4 Maintenance Windows</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Company may perform scheduled maintenance during designated windows (typically outside business hours) with at least 48 hours advance notice. Emergency maintenance may be performed with minimal notice when required to maintain security or system integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-white">12. Force Majeure</h2>
              <p className="text-gray-300 leading-relaxed">
                Neither party shall be liable for any failure or delay in performance under this Agreement which is due to an earthquake, flood, fire, storm, natural disaster, act of God, war, terrorism, armed conflict, labor strike, lockout, or boycott, provided that such events are beyond the reasonable control of the affected party. The affected party shall give written notice of such delay to the other party and shall use reasonable efforts to avoid or remove such causes of non-performance and shall proceed to perform with all reasonable dispatch whenever such causes are removed. If such delay continues for a period of ninety (90) days or more, either party may terminate this Agreement upon written notice.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-500 italic text-center">
                This Master Subscription Agreement governs the provision of ScamAI platform services by Reality Inc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
