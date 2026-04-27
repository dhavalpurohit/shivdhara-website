"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ChevronDown, AlertTriangle, ShieldAlert, Info } from "lucide-react";

export const InvestorAlert = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="bg-primary border-t border-white/10">
      <Container>
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full py-6 flex items-center justify-between text-white hover:text-secondary transition-colors group"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-secondary" />
            <span className="text-lg font-bold tracking-wide uppercase">
              Investor Alert & Legal Disclaimer
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pb-14 pt-4 space-y-12 text-blue-100/80 text-sm leading-relaxed">
                {/* Section 1 — Attention Investors */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-white">
                    <Info className="w-5 h-5 text-secondary" />
                    <h3 className="text-xl font-bold">Attention Investors</h3>
                  </div>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      Stock Brokers can accept securities as margin from clients
                      only by way of pledge in the depository system w.e.f.
                      September 1, 2020.
                    </li>
                    <li>
                      Update your mobile number & email ID with your stock
                      broker and depository participant and receive OTP directly
                      from depository on your email id and/or mobile number to
                      create pledge.
                    </li>
                    <li>
                      Pay 20% upfront margin of the transaction value to trade
                      in cash market segment.
                    </li>
                    <li>
                      Investors may please refer to the Exchange's Frequently
                      Asked Questions (FAQs) issued vide circular reference
                      NSE/INSP/45191 dated July 31, 2020 and NSE/INSP/45534
                      dated August 31, 2020 and other guidelines issued from
                      time to time in this regard.
                    </li>
                    <li>
                      Check your Securities / MF / Bonds in the consolidated
                      account statement issued by NSDL/CDSL every month.
                    </li>
                  </ol>
                </div>

                <div className="h-px bg-white/10" />

                {/* Section 2 — Investor Alert */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-white">
                    <ShieldAlert className="w-5 h-5 text-secondary" />
                    <h3 className="text-xl font-bold">Investor Alert</h3>
                  </div>
                  <ol className="list-decimal pl-5 space-y-3">
                    <li>
                      KYC is one time exercise while dealing in securities
                      markets - once KYC is done through a SEBI registered
                      intermediary (broker, DP, Mutual Fund etc.), you need not
                      undergo the same process again when you approach another
                      intermediary.
                    </li>
                    <li>
                      Prevent unauthorised transactions in your account. Update
                      your mobile numbers/email IDs with your stock brokers.
                      Receive information of your transactions directly from
                      Exchange on your mobile/email at the end of the day.
                      Issued in the interest of investors.
                    </li>
                    <li>
                      In case of any grievance / complaint, please contact us or
                      raise a complaint on SCORES website.
                    </li>
                    <li>
                      No need to issue cheques by investors while subscribing to
                      IPO. Just write the bank account number and sign in the
                      application form to authorise your bank to make payment in
                      case of allotment. No worries for refund as the money
                      remains in investor's account.
                    </li>
                    <li>
                      Be cautious about unsolicited investment tips / messages
                      received through social media platforms.
                    </li>
                  </ol>
                </div>

                <div className="h-px bg-white/10" />

                {/* Section 3 — Fraud Warning */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-white">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <h3 className="text-xl font-bold">Fraud Warning</h3>
                  </div>
                  <p className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-r-lg text-white">
                    Many instances have been reported where fraudsters misuse
                    brand names of brokerage firms to lure investors with false
                    promises of high returns. Investors are advised not to
                    transfer money to any person or entity promising such
                    returns or claiming to be associated with Shivdhara
                    Securities without verifying official contact details.
                    Always verify official contact details and bank account
                    details from our official website before investing.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
};
