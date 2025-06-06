
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Gift, Users, Share2, Wallet, Copy, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ReferralEarn = () => {
  const [referralCode] = useState("SAADI2025");
  const [copied, setCopied] = useState(false);

  const copyReferralCode = () => {
    const referralLink = `https://saadiride.com/join?ref=${referralCode}`;
    navigator.clipboard.writeText(referralLink).then(() => {
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Referral link copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = referralLink;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Referral link copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const rewardTiers = [
    {
      referrals: "1-5",
      reward: "₹500",
      bonus: "Welcome Bonus",
      description: "For each successful referral"
    },
    {
      referrals: "6-10",
      reward: "₹750",
      bonus: "Gold Tier",
      description: "Increased reward per referral"
    },
    {
      referrals: "11-20",
      reward: "₹1000",
      bonus: "Platinum Tier",
      description: "Premium reward tier"
    },
    {
      referrals: "21+",
      reward: "₹1500",
      bonus: "Diamond Tier",
      description: "Maximum reward tier"
    }
  ];

  const referralStats = [
    { label: "Total Referrals", value: "0", icon: Users },
    { label: "Successful Bookings", value: "0", icon: CheckCircle },
    { label: "Total Earnings", value: "₹0", icon: Wallet },
    { label: "Pending Rewards", value: "₹0", icon: Gift }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-wedding-navy mb-4">
            Referral & Earn Program
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Share Saadi Ride with friends and family, earn rewards for every successful booking
          </p>
          <Badge className="bg-wedding-pink text-white px-4 py-2 text-lg">
            Earn up to ₹1500 per referral
          </Badge>
        </div>

        {/* How it Works */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-wedding-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="h-8 w-8 text-wedding-pink" />
                </div>
                <CardTitle className="text-xl">1. Share Your Link</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Share your unique referral link with friends and family who are planning their weddings
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-wedding-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-wedding-pink" />
                </div>
                <CardTitle className="text-xl">2. They Book Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  When they book vendors or transportation services through Saadi Ride, you both benefit
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-wedding-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="h-8 w-8 text-wedding-pink" />
                </div>
                <CardTitle className="text-xl">3. Earn Rewards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receive cash rewards directly to your account for every successful booking made through your referral
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Referral Stats */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-8 text-center">
            Your Referral Dashboard
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {referralStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-wedding-pink/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-6 w-6 text-wedding-pink" />
                    </div>
                    <div className="text-2xl font-bold text-wedding-navy">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Referral Link */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Your Referral Link</CardTitle>
              <CardDescription className="text-center">
                Share this link to start earning rewards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input 
                  value={`https://saadiride.com/join?ref=${referralCode}`}
                  readOnly
                  className="flex-1"
                />
                <Button onClick={copyReferralCode} className="bg-wedding-pink hover:bg-wedding-pink/90">
                  {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Your referral code: <strong>{referralCode}</strong>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Reward Tiers */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-wedding-navy mb-8 text-center">
            Reward Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewardTiers.map((tier, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="pb-2">
                  <Badge className="w-fit mx-auto bg-wedding-navy text-white">
                    {tier.bonus}
                  </Badge>
                  <CardTitle className="text-center text-lg">{tier.referrals} Referrals</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-wedding-pink mb-2">{tier.reward}</div>
                  <p className="text-sm text-gray-600">{tier.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Terms */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Rewards are paid within 30 days of successful service completion</li>
                <li>• Referred customers must be new to Saadi Ride platform</li>
                <li>• Minimum booking value of ₹5,000 required for reward eligibility</li>
                <li>• Self-referrals are not permitted</li>
                <li>• Saadi Ride reserves the right to modify the program terms</li>
                <li>• Rewards are subject to applicable taxes</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReferralEarn;
