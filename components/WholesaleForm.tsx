'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2, Send, ShieldCheck, Mail, Phone, MessageSquare } from 'lucide-react';

export default function WholesaleForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    productionTitle: '',
    productionType: 'Feature Film',
    shootDate: '',
    propVolume: 'under-10-stacks',
    denominations: [] as string[],
    distressing: 'Crisp & Banded',
    fullName: '',
    email: '',
    phone: '',
    specialInstructions: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [refId, setRefId] = useState(0);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setRefId(Math.floor(1000 + Math.random() * 9000));
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (denom: string) => {
    setFormData((prev) => {
      const current = [...prev.denominations];
      const idx = current.indexOf(denom);
      if (idx > -1) {
        current.splice(idx, 1);
      } else {
        current.push(denom);
      }
      return { ...prev, denominations: current };
    });
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: `Wholesale Quote Request - ${formData.productionTitle}`,
          message: formData.specialInstructions,
          type: 'wholesale',
          details: {
            productionTitle: formData.productionTitle,
            productionType: formData.productionType,
            shootDate: formData.shootDate,
            propVolume: formData.propVolume,
            denominations: formData.denominations,
            distressing: formData.distressing,
          }
        }),
      });

      const data = await res.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || 'Failed to submit proposal brief.');
      }
    } catch (err) {
      setErrorMessage('A network error occurred. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden max-w-2xl mx-auto" id="wholesale-quote-form-root">
      {/* Form Banner Header */}
      <div className="bg-black text-white p-8 relative overflow-hidden border-b border-gold/30">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
        <div className="relative z-10 space-y-2">
          <span className="text-gold uppercase font-mono tracking-widest text-[10px] font-bold block">
            Industrial Props & Bulk Supply
          </span>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
            Wholesale & Bulk Production Quote
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed max-w-md">
            For production orders exceeding $500, custom aging treatments, or complex vault scene setups, please complete our express quoting form.
          </p>
        </div>

        {/* Step Indicators */}
        {!isSubmitted && (
          <div className="flex gap-2 mt-6">
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  step >= num ? 'bg-gold' : 'bg-white/10'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-8">
        {isSubmitted ? (
          <div className="text-center py-8 space-y-6 animate-scale-in" id="wholesale-success">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-100 shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-xl text-black">Bulk Proposal Request Received</h4>
              <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Our dedicated production prop supervisor has received your brief for <em>&quot;{formData.productionTitle || 'Untitled Production'}&quot;</em>.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border text-left max-w-md mx-auto text-xs space-y-2 leading-relaxed">
              <p className="font-bold text-[10px] text-gray-400 uppercase tracking-widest">Next Compliance Actions:</p>
              <p>⏱️ <strong>Guaranteed 2-Hour Response:</strong> A formal written invoice with compliant corporate bulk discount pricing will be emailed to <span className="font-bold text-black">{formData.email}</span>.</p>
              <p>💬 <strong>WhatsApp Priority Line:</strong> Need custom distressing previews? Send your reference photos to our support team and quote reference ID <strong>AMP-WHOLESALE-{refId}</strong>.</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setFormData({
                    productionTitle: '',
                    productionType: 'Feature Film',
                    shootDate: '',
                    propVolume: 'under-10-stacks',
                    denominations: [],
                    distressing: 'Crisp & Banded',
                    fullName: '',
                    email: '',
                    phone: '',
                    specialInstructions: '',
                  });
                }}
                className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold transition-all"
                id="btn-wholesale-reset"
              >
                Submit Another Request
              </button>
              <a
                href="https://wa.me/61400000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gold text-white hover:text-black px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2"
                id="btn-wholesale-wa"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                WhatsApp Priority
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* STEP 1: PRODUCTION OVERVIEW */}
            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-5 animate-fade-in" id="wholesale-step-1">
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-black">Step 1: Creative Production Overview</h4>
                  <p className="text-xs text-gray-500">Provide details about your film, photo shoot, or agency project.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Production Title *</label>
                    <input 
                      type="text" 
                      name="productionTitle" 
                      required
                      placeholder="e.g. Heist at Bondi, Season 3, Commercial Shoot"
                      value={formData.productionTitle}
                      onChange={handleInputChange}
                      className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold focus:ring-0" 
                      id="input-wholesale-title"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Production Type *</label>
                      <select 
                        name="productionType"
                        value={formData.productionType}
                        onChange={handleInputChange}
                        className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold"
                        id="select-wholesale-type"
                      >
                        <option>Feature Film</option>
                        <option>TV Commercial</option>
                        <option>Short Film / Indie Project</option>
                        <option>Photography Studio Setup</option>
                        <option>Music Video</option>
                        <option>Theatre & Stage Play</option>
                        <option>Corporate / Financial Training</option>
                        <option>Other / Novelty</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Estimated Shoot Date *</label>
                      <input 
                        type="date" 
                        name="shootDate" 
                        required
                        value={formData.shootDate}
                        onChange={handleInputChange}
                        className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold" 
                        id="input-wholesale-date"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t flex justify-end">
                  <button
                    type="submit"
                    className="bg-black hover:bg-gold text-white hover:text-black px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-1"
                    id="btn-wholesale-next1"
                  >
                    Next Specifications
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: PROP MONEY VOLUME & SPECIFICATIONS */}
            {step === 2 && (
              <form onSubmit={handleNext} className="space-y-5 animate-fade-in" id="wholesale-step-2">
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-black">Step 2: Prop Money Specifications</h4>
                  <p className="text-xs text-gray-500">Determine the volume, denominations, and hand-aging treatments required.</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 block mb-2">Estimated Prop Volume Required *</label>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {[
                        { val: 'under-10-stacks', label: 'Under 10 Stacks' },
                        { val: '10-50-stacks', label: '10 to 50 Stacks' },
                        { val: '50-100-stacks', label: '50 to 100 Stacks' },
                        { val: 'briefcases-full', label: 'Briefcases / Vault Layouts' },
                      ].map((item) => (
                        <label 
                          key={item.val} 
                          className={`p-3 border rounded-xl flex items-center gap-3 cursor-pointer transition-all ${
                            formData.propVolume === item.val 
                              ? 'bg-black/5 border-black font-semibold' 
                              : 'border-gray-200 hover:border-black'
                          }`}
                        >
                          <input 
                            type="radio" 
                            name="propVolume"
                            value={item.val}
                            checked={formData.propVolume === item.val}
                            onChange={handleInputChange}
                            className="text-gold focus:ring-gold"
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 block mb-2">Denominations Required (Select all that apply)</label>
                    <div className="flex flex-wrap gap-2">
                      {['$100 Notes', '$50 Notes', '$20 Notes', '$10 Notes', '$5 Notes'].map((denom) => {
                        const isChecked = formData.denominations.includes(denom);
                        return (
                          <button
                            type="button"
                            key={denom}
                            onClick={() => handleCheckboxChange(denom)}
                            className={`px-4 py-2 text-xs rounded-full border transition-all ${
                              isChecked 
                                ? 'bg-black border-black text-white font-bold' 
                                : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-black'
                            }`}
                            id={`btn-wholesale-denom-${denom.replace('$', '')}`}
                          >
                            {denom}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 block mb-2">Distressing / Aging Level</label>
                    <select 
                      name="distressing"
                      value={formData.distressing}
                      onChange={handleInputChange}
                      className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold"
                      id="select-wholesale-distressing"
                    >
                      <option>Crisp & Banded (Brand New Stacks)</option>
                      <option>Lightly Circulated (Realistic Soft Edges)</option>
                      <option>Heavily Distressed (Hand-creased, Stained, Smudged)</option>
                      <option>Custom Request (Mention in notes - e.g. blood, bullet holes, burned)</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="bg-gray-100 hover:bg-gray-200 text-black px-5 py-3 rounded-lg text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-1"
                    id="btn-wholesale-prev2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-black hover:bg-gold text-white hover:text-black px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-1"
                    id="btn-wholesale-next2"
                  >
                    Next Contact Info
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: CONTACT & SUBMIT */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in" id="wholesale-step-3">
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-base text-black">Step 3: Contact & Delivery Specifics</h4>
                  <p className="text-xs text-gray-500">Provide your contact details so our team can send your commercial prop quotation.</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName" 
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold focus:ring-0" 
                        id="input-wholesale-fullname"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Professional Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold focus:ring-0" 
                        id="input-wholesale-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      placeholder="e.g. 0400 000 000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold focus:ring-0" 
                      id="input-wholesale-phone"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-500 block mb-1">Special Instructions / Brief Description of Scene Needs</label>
                    <textarea 
                      name="specialInstructions"
                      rows={3}
                      placeholder="e.g. We require a bank vault scene with 40 stacks of $100 notes. Stacks must look freshly minted. Deliver to Sydney film studio."
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      className="w-full border p-3 text-sm rounded-lg bg-gray-50 focus:bg-white focus:outline-gold"
                      id="textarea-wholesale-instructions"
                    />
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-xs font-sans leading-relaxed border border-red-100" id="wholesale-error-banner">
                      ⚠️ {errorMessage}
                    </div>
                  )}

                  {/* Trust badge */}
                  <div className="bg-gray-50 p-3 rounded-lg border flex items-center gap-3 text-[10px] text-gray-500">
                    <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                    <span>Your script details and production secrets are fully protected under our firm corporate privacy policy. We never share prop destinations with external bodies.</span>
                  </div>
                </div>

                <div className="pt-4 border-t flex justify-between">
                  <button
                    type="button"
                    disabled={isSending}
                    onClick={handlePrev}
                    className="bg-gray-100 hover:bg-gray-200 text-black px-5 py-3 rounded-lg text-xs uppercase tracking-widest font-bold transition-all flex items-center gap-1 disabled:opacity-50"
                    id="btn-wholesale-prev3"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSending}
                    className="bg-black hover:bg-gold text-white hover:text-black px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold transition-all flex items-center justify-center gap-2 shadow-md disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                    id="btn-wholesale-submit"
                  >
                    {isSending ? 'Submitting...' : 'Submit Proposal Brief'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>
        )}
      </div>
    </div>
  );
}
