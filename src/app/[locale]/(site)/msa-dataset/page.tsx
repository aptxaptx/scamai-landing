import React from 'react';

export default function DatasetMSAPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-medium text-black mb-2">
            Dataset License Agreement
          </h1>
          <p className="text-gray-600">Reality Inc. Dataset Licensing</p>
          <p className="text-sm text-gray-500 mt-4">Effective upon execution of Order Form</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-6">
              This DATASET LICENSE AGREEMENT (the "Agreement") governs the licensing of datasets between Reality Inc., a Delaware corporation located at 2150 Shattuck Ave., Penthouse, Berkeley, CA 94704 USA ("Reality Inc."), and any entity that executes an Order Form referencing this Agreement ("Licensee"). Throughout this Agreement, Reality Inc. and Licensee may be referred to individually as a "Party" or collectively as the "Parties."
            </p>

            <p className="text-gray-700 leading-relaxed">
              This Agreement becomes effective upon execution of an Order Form by both Parties (the "Effective Date").
            </p>
          </div>

          {/* Recitals */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-6">
              RECITALS
            </h2>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Reality Inc. develops and compiles proprietary datasets specifically designed to identify, analyze, and mitigate phishing and related fraudulent activities.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Licensee desires to access and utilize the datasets identified in the applicable Order Form (the "Datasets") for the purposes described in the Order Form (the "Permitted Uses").
              </p>

              <p className="text-gray-700 leading-relaxed">
                Reality Inc. desires to grant Licensee a non-exclusive license to access and utilize the Datasets under the terms and conditions set forth in this Agreement.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The Parties enter into this Agreement to clearly define the scope and limitations of Licensee's license rights to the Datasets, establish appropriate restrictions on their use, and specify the obligations of the Parties relating to confidentiality, data security, and intellectual property protection to ensure clarity and compliance throughout the term of this Agreement.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-6">
              1. DATASET LICENSE
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">1.1 License Grant</h3>
                <p className="text-gray-700 leading-relaxed">
                  Subject to the terms and conditions of this Agreement, Reality Inc. grants to Licensee a revocable, non-exclusive, non-transferable license to access, use, copy, modify, analyze, and process the Datasets for the Permitted Uses during the period specified in the applicable Order Form (the "Term"). To avoid any doubt, this license is strictly limited to the Permitted Uses and does not permit sublicensing, redistribution, or other commercial exploitation of the Datasets, or any portion thereof, without Reality Inc.'s prior written consent. Reality Inc. reserves all rights not expressly granted to Licensee under this Agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">1.2 Use Restrictions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Except as expressly authorized by this Agreement, Licensee will not, and must ensure that its employees, contractors, agents, or representatives do not, directly or indirectly:
                </p>
                <ul className="list-none space-y-3 ml-4">
                  <li className="text-gray-700 leading-relaxed">
                    (a) use the Datasets for any purpose other than the Permitted Uses;
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    (b) sublicense, sell, rent, lease, assign, distribute, publish, transfer, disclose, or otherwise make available the Datasets, in whole or in part, to any third party without Reality Inc.'s prior written consent;
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    (c) use the Datasets to provide any commercial product or service to any third party, or incorporate any substantial portion of the Datasets into any commercially distributed product or service, not expressly identified as a Permitted Use;
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    (d) remove, obscure, or modify any proprietary notices or disclaimers included in the Datasets, or any copies thereof;
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    (e) reverse engineer, disassemble, decompile, adapt, decode, or attempt to derive the underlying structure, composition, or methods used to compile the Datasets;
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    (f) use the Datasets in any manner that infringes, misappropriates, or violates any third-party intellectual property rights, privacy rights, or other rights, or that violates any applicable law, regulation, or order; or
                  </li>
                  <li className="text-gray-700 leading-relaxed">
                    (g) attempt to circumvent or compromise the security measures associated with access to the Datasets or otherwise attempt unauthorized access to any portion of Reality Inc.'s data systems or networks.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">1.3 Delivery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reality Inc. will deliver the Datasets to Licensee in accordance with the delivery specifications set forth in the applicable Order Form. Upon receiving the Datasets, Licensee will promptly confirm receipt to Reality Inc. in writing. Licensee is responsible for ensuring secure storage, protection, and handling of the Datasets upon delivery and at all times thereafter, in accordance with the confidentiality and security obligations specified in this Agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">1.4 No Maintenance or Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reality Inc. has no obligation under this Agreement to provide any maintenance, technical support, or other support services to Licensee relating to the Datasets, except as otherwise expressly agreed upon by the Parties in a signed writing. Further, Reality Inc. has no obligation to provide Licensee with any new updates, versions, enhancements, or releases of the Datasets unless specifically agreed upon by the Parties in a separate written agreement signed by both Parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">1.5 Ethical Use</h3>
                <p className="text-gray-700 leading-relaxed">
                  Licensee agrees to ensure that any use of the Datasets under this Agreement complies with applicable ethical standards and best practices of Licensee's industry. Licensee will take reasonable measures to identify and mitigate bias in any products, services, or solutions utilizing the Datasets and to clearly inform users of any known limitations or risks associated with such products, services, or solutions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">1.6 Mitigation of Harm</h3>
                <p className="text-gray-700 leading-relaxed">
                  Licensee will adopt adequate measures and safeguards in developing any products, services, or solutions utilizing the Datasets to mitigate the risk of harm to vulnerable populations, including groups historically disadvantaged, marginalized, or at risk of exclusion. Licensee will regularly review and evaluate its practices to identify and address potential adverse impacts on these populations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-6">
              2. FEES AND PAYMENT
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">2.1 License Fee</h3>
                <p className="text-gray-700 leading-relaxed">
                  In consideration of the license granted under this Agreement, Licensee will pay Reality Inc. the "License Fee" specified in the applicable Order Form. Licensee will make all payments in U.S. Dollars in accordance with the payment procedure specified in the Order Form without any deductions or offsets. Any payment that remains unpaid more than 10 days after Licensee's receipt of written notice of nonpayment from Reality Inc. will accrue interest at a rate of 1% per month, calculated from the original due date until fully paid.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">2.2 Taxes</h3>
                <p className="text-gray-700 leading-relaxed">
                  All Fees payable by Licensee under this Agreement are exclusive of taxes and similar assessments. Licensee is responsible for all sales, use, value-added, and excise taxes, as well as similar taxes, duties, tariffs, or governmental charges of any kind that may be imposed by applicable law on any amounts payable hereunder, other than taxes assessed on Reality Inc. based on its net income. If Licensee is legally required to withhold any taxes from payments due under this Agreement, Licensee will notify Reality Inc. and provide appropriate documentation of such withholding.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">2.3 Recordkeeping</h3>
                <p className="text-gray-700 leading-relaxed">
                  Licensee will maintain complete, accurate, and detailed records relating to the License Fee and the use of the Datasets under this Agreement for the duration of the Term and for a period of at least two years thereafter. Upon reasonable request, Licensee will promptly provide Reality Inc. with access to or copies of such records solely for the purpose of verifying Licensee's compliance with this Agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">2.4 Audit Rights</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reality Inc. has the right, upon reasonable prior written notice to Licensee, to audit Licensee's records relevant to this Agreement during normal business hours to confirm compliance with the license terms, usage limitations, and payment obligations under this Agreement. Reality Inc. will bear its own costs for conducting any audit unless the audit reveals a material noncompliance with this Agreement by Licensee, such as an underpayment of the License Fee by more than 5% or a use of the Datasets in violation of Sections 1.1 or 1.2, in which case, Licensee will promptly reimburse Reality Inc. for all reasonable costs and expenses incurred in conducting such audit.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-6">
              3. INTELLECTUAL PROPERTY
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.1 Ownership</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reality Inc. retains all right, title, and interest in and to the Datasets, including all intellectual property rights therein. Nothing in this Agreement transfers or assigns to Licensee any ownership rights in the Datasets. Licensee owns and retains all right, title, and interest in and to any data, analyses, results, or other materials developed or processed by Licensee utilizing the Datasets ("Processed Data"), including all intellectual property rights therein. Reality Inc. acknowledges that nothing in this Agreement grants Reality Inc. any rights in or to the Processed Data, except as expressly stated in Section 3.2.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.2 Derivative Works</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the extent Licensee creates or develops any modifications, improvements, enhancements, or other derivative works based upon or incorporating elements of the Datasets (collectively, "Derivative Works"), Licensee will own all right, title, and interest in such Derivative Works, including all intellectual property rights therein, subject to the following:
                </p>
                <p className="text-gray-700 leading-relaxed mb-3 ml-4">
                  3.2.1 Licensee grants Reality Inc. a perpetual, irrevocable, worldwide, non-exclusive, fully paid-up, royalty-free, unrestricted license (with the right to sublicense) to use, reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, and otherwise exploit such Derivative Works, without limitation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3 ml-4">
                  3.2.2 Licensee's rights to use, modify, create derivative works from, or otherwise take actions regarding the Derivative Works will be limited solely to the duration of the Term and subject to the continued validity of the license granted under Section 1.1.
                </p>
                <p className="text-gray-700 leading-relaxed ml-4">
                  3.2.3 Upon the termination of this Agreement, Licensee's right to use, modify, create derivative works from, or otherwise take actions regarding the Derivative Works will automatically cease, except as may be otherwise explicitly agreed by the Parties in writing. Reality Inc.'s rights under subsection 3.2.1 above will survive indefinitely.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.3 Feedback</h3>
                <p className="text-gray-700 leading-relaxed">
                  Licensee may provide Reality Inc. with suggestions, recommendations, modifications, enhancements, ideas, improvements, or other feedback relating to the Datasets ("Feedback"). Any Feedback provided by Licensee, even if designated as confidential, will not create any confidentiality obligation for Reality Inc. Licensee assigns to Reality Inc. all right, title, and interest, including all intellectual property rights, in and to such Feedback, and Reality Inc. will have the perpetual, irrevocable, worldwide, royalty-free, sublicensable, fully transferable, and unrestricted right to use, reproduce, publicly display, publicly perform, modify, distribute, commercialize, create derivative works of, and otherwise exploit the Feedback in Reality Inc.'s sole discretion, without attribution, compensation, or restriction of any kind. Reality Inc. is under no obligation to use any Feedback provided by Licensee.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.4 Attribution</h3>
                <p className="text-gray-700 leading-relaxed">
                  In any materials, websites, presentations, advertising, promotional communications, or other communications in which Licensee promotes or provides information about the Datasets or any products, services, or solutions using the Datasets, Licensee agrees to provide attribution to Reality Inc. using the following statement or a substantially similar statement: "This product incorporates data licensed from Reality Inc."
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.5 Trademark License</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Reality Inc. grants Licensee a non-exclusive, non-transferable, revocable license to use the trademarks listed in the applicable Order Form (the "Trademarks") solely to provide the required attribution under Section 3.4. All use of the Trademarks by Licensee must comply with any written trademark usage guidelines provided by Reality Inc. from time to time, as may be updated periodically. Licensee acknowledges Reality Inc.'s sole ownership and control of its Trademarks and agrees that all goodwill arising from Licensee's use of the Trademarks will inure exclusively to Reality Inc.'s benefit. Upon termination of this Agreement, Licensee will immediately cease all use of the Trademarks. To avoid any doubt, Licensee agrees it will not, directly or indirectly:
                </p>
                <p className="text-gray-700 leading-relaxed mb-2 ml-4">
                  3.5.1 Alter, modify, or create new brands incorporating any Trademarks;
                </p>
                <p className="text-gray-700 leading-relaxed mb-2 ml-4">
                  3.5.2 Use, register, or attempt to register any words, names, graphics, symbols, or branding elements that are confusingly similar to the Trademarks as a trademark, trade name, domain name, product name, or other commercial identifier; or
                </p>
                <p className="text-gray-700 leading-relaxed ml-4">
                  3.5.3 Assist, encourage, or cooperate with any third party in engaging in any of the foregoing prohibited activities.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">3.6 Third-Party Infringement</h3>
                <p className="text-gray-700 leading-relaxed">
                  Licensee will promptly notify Reality Inc. if it becomes aware of any actual, threatened, or reasonably suspected infringement of the Datasets, providing sufficient detail regarding the infringement to enable Reality Inc. to identify, evaluate, and, if Reality Inc. determines in its sole discretion, enforce its rights. Licensee agrees to reasonably assist Reality Inc. in the investigation and enforcement of its rights against any such infringement.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-6">
              4. CONFIDENTIALITY
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.1 Definition</h3>
                <p className="text-gray-700 leading-relaxed">
                  "Confidential Information" refers to non-public, confidential or proprietary information that one Party (the "Receiving Party") receives from the other Party (the "Disclosing Party") concerning the Disclosing Party's business, finances, products, or intellectual property, regardless of whether it is disclosed orally or in writing, in print or electronic media, and regardless of whether it is marked "confidential." For clarity, "Confidential Information" includes the content of the Datasets, the terms of this Agreement, information concerning the negotiations preceding this Agreement, and each Party's business plans arising out of, relating to, or created in the course of this Agreement, but it does not include information: (a) in the public domain through no fault of the Receiving Party; (b) previously known to the Receiving Party; or (c) rightfully obtained by the Receiving Party on a non-confidential basis from a third party, not in breach of an agreement with the Disclosing Party and not due to reverse engineering.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.2 Non-Disclosure</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each Party will only use Confidential Information it obtains from or learns about the other Party to the extent necessary to perform its obligations under or enjoy the benefits of this Agreement, and it will only disclose the other Party's Confidential Information to its parents, affiliates, officers, directors, employees, contractors, attorneys, accountants, professional advisors, or other third parties on a need-to-know basis and only if such parties are subject to a duty of confidentiality no less restrictive than this Section. In addition, each Party must adopt commercially reasonable procedures to protect and safeguard the confidentiality of the other Party's Confidential Information. These nondisclosure obligations do not apply to disclosures required in response to a lawful subpoena or court order, so long as the Party subject to the subpoena or court order provides prompt written notice to the other Party and cooperates with the other Party to minimize the disclosure.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.3 Publicity</h3>
                <p className="text-gray-700 leading-relaxed">
                  Notwithstanding anything to the contrary stated or implied in this Agreement, Licensee agrees that Reality Inc. may publicly state or indicate that it has a contractual relationship with Licensee. Reality Inc. will not disclose any additional details regarding the relationship without Licensee's prior written consent.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.4 Data Security and Privacy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Licensee will maintain commercially reasonable administrative, physical, and technical safeguards designed to protect any private personal or confidential data included within the Datasets from unauthorized access, disclosure, use, alteration, or destruction. Licensee will promptly notify Reality Inc. upon becoming aware of any actual or reasonably suspected unauthorized access to, or use, disclosure, loss, or alteration of, personal or confidential data contained in or derived from the Datasets.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.5 Return of Materials</h3>
                <p className="text-gray-700 leading-relaxed">
                  Upon termination or expiration of this Agreement, each Party will promptly destroy or, at the disclosing Party's election, return to the disclosing Party all Confidential Information and any materials containing or reflecting such Confidential Information received from the other Party. Notwithstanding the foregoing, each Party may retain one archival copy of any Confidential Information or materials reflecting the other Party's Confidential Information as reasonably necessary to preserve its rights under this Agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">4.6 Injunctive Relief</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each Party acknowledges that the other Party's Confidential Information represents significant value, developed or acquired through substantial time, effort, and expense, and provides a material competitive advantage. Each Party agrees that unauthorized disclosure of the other Party's Confidential Information would cause immediate and irreparable harm for which monetary damages alone would be insufficient. Therefore, in the event of an actual, threatened, or suspected breach of confidentiality, the affected Party will be entitled to seek immediate injunctive relief without proof of actual damages, in addition to all other remedies available at law or in equity.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-6">
              5. REPRESENTATIONS AND WARRANTIES
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.1 Mutual</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each Party represents and warrants to the other that: (a) it has the right, power, and authority to enter into and perform this Agreement; (b) the execution and performance of this Agreement is not affected by or contrary to any agreements or understandings either Party has with any third parties; and (c) this Agreement has been duly authorized by appropriate corporate action.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.2 By Licensee</h3>
                <p className="text-gray-700 leading-relaxed">
                  Licensee represents, warrants, and covenants that: (a) it has the necessary experience, resources, and capabilities to fully perform its obligations under this Agreement and will use best efforts in connection with the use of the Datasets; (b) its use of the Datasets will comply strictly with this Agreement and all applicable laws and regulations; (c) its use of the Datasets, including any associated materials, will not infringe, misappropriate, or otherwise violate the copyrights, patents, trademarks, trade secrets, or other intellectual property rights of any third party; (d) it will bear sole responsibility for all costs, expenses, and liabilities associated with its use of the Datasets and will ensure that all third parties acting under its direction comply with the restrictions and requirements of this Agreement; and (e) it will not engage in any acts or omissions that diminish or impair the goodwill, name, or reputation of Reality Inc. or the Trademarks.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.3 By Reality Inc.</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reality Inc. represents and warrants that it has the right to grant the license set forth in this Agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">5.4 Disclaimer</h3>
                <div className="bg-gray-50 p-6">
                  <p className="text-gray-800 font-medium">
                    THE DATASETS ARE PROVIDED "AS IS," WITHOUT WARRANTIES OF ANY KIND. REALITY INC. DISCLAIMS ALL WARRANTIES NOT EXPRESSLY STATED IN THIS AGREEMENT—WHETHER IMPLIED, STATUTORY, OR OTHERWISE—INCLUDING ANY IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. REALITY INC. MAKES NO WARRANTY THAT THE DATASETS WILL MEET LICENSEE'S REQUIREMENTS, THAT THE DATASETS WILL BE ACCURATE, COMPLETE, UNINTERRUPTED, OR ERROR-FREE. THE ENTIRE RISK ARISING OUT OF LICENSEE'S USE OF THE DATASETS REMAINS SOLELY WITH LICENSEE.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-6">
              6. TERM AND TERMINATION
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">6.1 Termination for Breach</h3>
                <p className="text-gray-700 leading-relaxed">
                  Either Party may terminate this Agreement if the other Party breaches any material term and fails to cure such breach within thirty days of receiving a written notice from the non-breaching Party.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">6.2 Additional Reality Inc. Termination Rights</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reality Inc. may terminate this Agreement immediately upon written notice if: (a) Licensee engages in any unauthorized use, disclosure, sublicensing, or distribution of the Datasets or Reality Inc.'s Confidential Information; or (b) Licensee violates applicable laws or regulations in connection with its use of the Datasets. In addition, this Agreement will terminate immediately and automatically, without notice, if Licensee becomes insolvent, makes an assignment for the benefit of creditors, or becomes subject to bankruptcy or similar proceedings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">6.3 Effect of Termination</h3>
                <p className="text-gray-700 leading-relaxed">
                  Upon the termination of this Agreement, Licensee's rights under this Agreement will immediately terminate and revert to Reality Inc., and Licensee will permanently discontinue all use of the Datasets. Licensee further agrees to immediately return all materials relating to the Datasets to Reality Inc., at no cost to Reality Inc.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-6">
              7. INSURANCE
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Each Party will be responsible for obtaining and maintaining commercially reasonable insurance coverage throughout the Term of this Agreement, sufficient to protect against risks related to its operations and the performance of this Agreement.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-6">
              8. INDEMNIFICATION
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">8.1 By Licensee</h3>
                <p className="text-gray-700 leading-relaxed">
                  Licensee will indemnify Reality Inc., its parents, subsidiaries, affiliates, and their respective officers, directors, employees, agents, and representatives against all damages, losses, liabilities, costs, or expenses (including reasonable attorneys' fees) arising out of, relating to, or resulting from: (a) Licensee's breach of any representation, warranty, condition, or covenant under this Agreement; (b) any unauthorized or prohibited use, disclosure, or distribution of the Datasets by Licensee or its employees, contractors, agents, or representatives; (c) Licensee's failure to maintain the confidentiality or security of the Datasets as required under this Agreement; or (d) Licensee's use of the Datasets in violation of applicable law, regulation, or contractual obligation, or in a manner infringing or misappropriating any third party's intellectual property or other rights.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">8.2 By Reality Inc.</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reality Inc. will indemnify Licensee, its parents, subsidiaries, affiliates, and their respective officers, directors, employees, agents, and representatives against all damages, losses, liabilities, costs, or expenses (including reasonable attorneys' fees) arising out of, relating to, or resulting from Reality Inc.'s breach of any representation or warranty expressly set forth in this Agreement; provided, however, that Reality Inc.'s indemnification obligations will not extend to claims arising from or related to any modifications, enhancements, or derivative works created by or on behalf of Licensee, or Licensee's unauthorized use of the Datasets.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">8.3 Procedure</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Party seeking indemnification (the "Indemnitee") will provide the other Party (the "Indemnitor") with prompt written notice of any actual, threatened, or suspected third-party claims or actions for which indemnification is sought; provided, however, that failure to provide prompt notice will not relieve the Indemnitor of its indemnification obligations, except to the extent the Indemnitor demonstrates actual prejudice resulting directly from the delay. The Indemnitor will have sole control over the investigation, defense, and settlement of any such claims, except that: (a) the Indemnitee may participate in the defense and employ its own counsel at its own expense; and (b) the Indemnitor will not enter into any settlement that imposes obligations or restrictions upon the Indemnitee without the Indemnitee's prior written consent. The Indemnitee agrees to reasonably cooperate and assist the Indemnitor, at the Indemnitor's expense, in the investigation, defense, and settlement of any claim subject to the indemnification obligations set forth herein.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-6">
              9. LIMITATION OF LIABILITY
            </h2>

            <div className="bg-gray-50 p-6">
              <p className="text-gray-800 font-medium">
                IN NO EVENT WILL REALITY INC., ITS SUBSIDIARIES OR AFFILIATES, ITS LICENSOR(S), OR ANY OF THEIR RESPECTIVE AFFILIATES, SUBSIDIARIES, EMPLOYEES, OFFICERS, CONTRACTORS, AGENTS, OR OTHER REPRESENTATIVES BE LIABLE FOR ANY CONSEQUENTIAL, SPECIAL, STATUTORY, PUNITIVE, OR OTHER INDIRECT DAMAGES ARISING OUT OF OR RELATING THIS AGREEMENT, REGARDLESS OF: (A) WHETHER SUCH DAMAGES WERE FORESEEABLE; (B) WHETHER REALITY INC. WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; AND (C) THE LEGAL OR EQUITABLE THEORY UPON WHICH THE CLAIM IS BASED, AND NOTWITHSTANDING THE FAILURE OF ANY AGREED OR OTHER REMEDY OF ITS ESSENTIAL PURPOSE. REALITY INC.'S TOTAL LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, WILL NOT EXCEED THE AMOUNT OF LICENSE FEES PAID BY LICENSEE TO REALITY INC. UNDER THIS AGREEMENT.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-medium text-black mb-6">
              10. GENERAL TERMS
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.1 Amendments</h3>
                <p className="text-gray-700 leading-relaxed">
                  This Agreement may be amended only by a written instrument signed by authorized representatives of both Parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.2 Assignment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Licensee may not assign or transfer any of its rights or obligations under this Agreement, whether voluntarily or by operation of law, without the prior written consent of Reality Inc. Any attempted assignment in violation of this Section will be void.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.3 Binding Effect</h3>
                <p className="text-gray-700 leading-relaxed">
                  This Agreement binds and inures to the benefit of the Parties and their respective permitted successors and assigns.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.4 Compliance with Laws</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each Party will comply with all applicable federal, state, local, and foreign laws, rules, regulations, ordinances, and orders in connection with its execution, performance, and enforcement of this Agreement, including in connection with its use of the Datasets and fulfillment of any obligations hereunder. Each Party will promptly notify the other Party in writing upon becoming aware of any actual or alleged violation of applicable laws arising from or relating to this Agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.5 Construction</h3>
                <p className="text-gray-700 leading-relaxed">
                  This Agreement was reviewed and negotiated by each Party with the opportunity to seek independent legal counsel and will be interpreted fairly in accordance with its terms, without presumptions against either Party as the drafter. If any provision is held to be invalid or unenforceable, it will be revised to the minimum extent necessary to render it valid and enforceable while most closely reflecting the Parties' original intent, as evidenced solely by the text of this Agreement. If the provision cannot be so revised, it will be replaced with a valid and enforceable term consistent with the Parties' original intent, as evidenced solely by the text of this Agreement, or it will be excised from this Agreement to the extent it cannot be revised or replaced with a valid and enforceable provision. All other provisions will remain in full force and effect.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.6 Dispute Resolution</h3>
                <p className="text-gray-700 leading-relaxed">
                  Any dispute arising from or relating to this Agreement must be resolved through binding arbitration under the then-current commercial arbitration rules of the American Arbitration Association ("AAA"). Arbitration may be initiated by written notice from one Party to the other and will be conducted before a single arbitrator in San Francisco, California, in accordance with California law (including the discovery provisions of the California Civil Code and the California Code of Civil Procedure). The arbitrator will be mutually selected by the Parties, or, if the Parties cannot agree within ten calendar days of a request for arbitration, appointed by AAA. The arbitrator may award damages, injunctive relief, and reasonable attorneys' fees and expenses, any such award will be final and binding, and judgment may be entered in any court of competent jurisdiction. Notwithstanding the foregoing, either Party may seek preliminary injunctive relief in a court of law to enforce the terms of this Agreement or to preserve the status quo before the matter may be heard in arbitration. The Parties submit and waive all objections to the exclusive jurisdiction and venue of courts in San Francisco, California for such matters.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.7 Export Regulation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Licensee acknowledges that the Datasets may be subject to U.S. and international export laws and regulations. Licensee agrees to comply fully with all applicable export and import laws and regulations, including but not limited to the Export Administration Regulations (EAR) administered by the U.S. Department of Commerce and regulations administered by the U.S. Department of Treasury's Office of Foreign Assets Control (OFAC). Licensee will not export, re-export, or transfer the Datasets, in whole or in part, directly or indirectly, to any country, entity, or person prohibited by applicable export controls or sanctions laws. Licensee agrees to promptly notify Reality Inc. if it becomes aware of any potential or actual violation of export regulations related to the Datasets.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.8 Force Majeure</h3>
                <p className="text-gray-700 leading-relaxed">
                  Neither Party will be liable for any failure or delay in the performance of its obligations under this Agreement (other than obligations to make payments when due) to the extent such failure or delay results from any cause beyond its reasonable control, including natural disasters, fires, floods, earthquakes, epidemics, pandemics, acts of war, terrorism, civil unrest, government actions, labor strikes, communications or internet failures, or interruptions in power supplies (each, a "Force Majeure Event"). The affected Party will promptly notify the other Party in writing of the occurrence of a Force Majeure Event, its anticipated duration, and its effect on the affected Party's performance under this Agreement. The affected Party will use commercially reasonable efforts to mitigate and minimize the impact of the Force Majeure Event and to resume performance as promptly as practicable. If the Force Majeure Event continues for a period of 30 consecutive days or more, either Party may terminate this Agreement upon written notice to the other Party.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.9 Governing Law</h3>
                <p className="text-gray-700 leading-relaxed">
                  This Agreement will be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws principles, as if all acts or omissions related to this Agreement occurred entirely within San Francisco, California by California residents.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.10 Legal Fees</h3>
                <p className="text-gray-700 leading-relaxed">
                  In any action, arbitration, or proceeding arising from or relating to this Agreement, the prevailing Party will be entitled to recover its reasonable attorneys' fees, costs, and expenses from the non-prevailing Party.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.11 Nonsolicitation</h3>
                <p className="text-gray-700 leading-relaxed">
                  During the Term of this Agreement and for a period of 12 months after its termination, Licensee will not, directly or indirectly, solicit, hire, recruit, or encourage any employee or independent contractor of Reality Inc. to leave their employment or engagement with Reality Inc., without Reality Inc.'s prior written consent. This restriction does not apply to hiring resulting from general advertising or job postings not specifically targeted at Reality Inc.'s employees or contractors.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.12 Notices</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All notices, requests, demands, and other communications required or permitted under this Agreement must be in writing and will be deemed duly given: (a) upon personal delivery; (b) on the next business day following deposit with a nationally recognized overnight courier service; or (c) on the third business day after mailing via certified or registered mail, return receipt requested, postage prepaid. Notices to Reality Inc. must be sent to:
                </p>
                <div className="ml-4 text-gray-700 leading-relaxed space-y-1">
                  <p>Reality Inc.</p>
                  <p>Attention: Tech Team</p>
                  <p>Address: 2150 Shattuck Ave., Penthouse</p>
                  <p>Berkeley, CA 94704 USA</p>
                  <p>Email: support@scam.ai</p>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Notices to Licensee must be sent to the address provided in the applicable Order Form.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.13 Relationship of Parties</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each Party will perform its obligations under this Agreement solely as an independent contractor of the other Party. Nothing in this Agreement creates a partnership, joint venture, employment relationship, or agency between the Parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.14 Third-Party Beneficiaries</h3>
                <p className="text-gray-700 leading-relaxed">
                  This Agreement is for the sole benefit of the Parties and is not intended to confer any rights or remedies upon any third-party.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.15 Waiver</h3>
                <p className="text-gray-700 leading-relaxed">
                  A Party's failure or delay to exercise any right under this Agreement will not constitute a waiver of that right or any other rights unless the waiver is expressly stated in writing and signed by authorized representatives of both Parties.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-black mb-3">10.16 Entire Agreement</h3>
                <p className="text-gray-700 leading-relaxed">
                  This Agreement, together with any executed Order Forms, represents the complete and final understanding between the Parties regarding its subject matter, superseding all prior or contemporaneous oral or written agreements, representations, understandings, or communications related thereto.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 italic text-center">
              END OF DATASET LICENSE AGREEMENT
            </p>
            <p className="text-sm text-gray-500 text-center mt-4">
              This Agreement is effective only upon execution of an Order Form by both Parties. The Order Form will contain specific terms including dataset descriptions, permitted uses, pricing, delivery specifications, and signatures of authorized representatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
