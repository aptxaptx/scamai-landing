"use client";

import {
  Bento31,
  Bento32,
  Bento33,
  Bento34,
  Bento35,
  Bento36,
  Bento37,
  Bento38,
  Bento39,
  Bento40,
  Bento41,
  Bento42,
  Bento43,
  Bento44,
  Bento45,
  Bento46,
  Bento47,
  Bento48,
  Bento49,
  Bento50,
  Bento51,
  Bento52,
  Bento53,
  Bento54,
  Bento55,
  Bento56,
  Bento57,
  Bento58,
  Bento59,
  Bento60,
} from '@/components/bento';

import {
  BentoV1_1,
  BentoV1_2,
  BentoV1_3,
  BentoV1_4,
  BentoV1_5,
  BentoV1_6,
  BentoV1_7,
  BentoV1_8,
  BentoV1_9,
  BentoV1_10,
  BentoV1_11,
  BentoV1_12,
  BentoV1_13,
  BentoV1_14,
  BentoV1_15,
  BentoV1_16,
  BentoV1_17,
  BentoV1_18,
  BentoV1_19,
  BentoV1_20,
  BentoV1_21,
  BentoV1_22,
  BentoV1_23,
  BentoV1_24,
  BentoV1_25,
  BentoV1_26,
  BentoV1_27,
  BentoV1_28,
  BentoV1_29,
  BentoV1_30,
} from '@/components/bento-v1';

import { BentoCrypto, cryptoCards } from '@/components/bento-crypto';

import '@/styles/bento/app.sass';

export default function BentoShowcasePage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Bento <span className="text-[#0043FA]">Cards Showcase</span>
          </h1>
          <p className="text-xl text-gray-400">
            90 Beautiful Animated Bento Card Components
          </p>
          <p className="text-lg text-gray-500 mt-2">
            30 AI Cards (v2) + 30 Multipurpose Cards (v1) + 30 Crypto Cards (v4)
          </p>
        </div>

        {/* Bento Cards v2 - AI Theme */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-[#0043FA]">AI Theme</span> Cards (v2)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 31</h3>
            <Bento31 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 32</h3>
            <Bento32 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 33</h3>
            <Bento33 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 34</h3>
            <Bento34 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 35</h3>
            <Bento35 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 36</h3>
            <Bento36 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 37</h3>
            <Bento37 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 38</h3>
            <Bento38 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 39</h3>
            <Bento39 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 40</h3>
            <Bento40 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 41</h3>
            <Bento41 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 42</h3>
            <Bento42 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 43</h3>
            <Bento43 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 44</h3>
            <Bento44 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 45</h3>
            <Bento45 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 46</h3>
            <Bento46 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 47</h3>
            <Bento47 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 48</h3>
            <Bento48 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 49</h3>
            <Bento49 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 50</h3>
            <Bento50 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 51</h3>
            <Bento51 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 52</h3>
            <Bento52 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 53</h3>
            <Bento53 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 54</h3>
            <Bento54 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 55</h3>
            <Bento55 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 56</h3>
            <Bento56 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 57</h3>
            <Bento57 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 58</h3>
            <Bento58 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 59</h3>
            <Bento59 />
          </div>
          
          <div className="bento-wrapper">
            <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 60</h3>
            <Bento60 />
          </div>
          </div>
        </div>

        {/* Bento Cards v1 - Multipurpose Theme */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-[#0043FA]">Multipurpose</span> Cards (v1)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 1</h3>
              <BentoV1_1 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 2</h3>
              <BentoV1_2 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 3</h3>
              <BentoV1_3 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 4</h3>
              <BentoV1_4 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 5</h3>
              <BentoV1_5 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 6</h3>
              <BentoV1_6 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 7</h3>
              <BentoV1_7 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 8</h3>
              <BentoV1_8 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 9</h3>
              <BentoV1_9 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 10</h3>
              <BentoV1_10 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 11</h3>
              <BentoV1_11 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 12</h3>
              <BentoV1_12 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 13</h3>
              <BentoV1_13 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 14</h3>
              <BentoV1_14 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 15</h3>
              <BentoV1_15 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 16</h3>
              <BentoV1_16 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 17</h3>
              <BentoV1_17 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 18</h3>
              <BentoV1_18 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 19</h3>
              <BentoV1_19 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 20</h3>
              <BentoV1_20 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 21</h3>
              <BentoV1_21 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 22</h3>
              <BentoV1_22 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 23</h3>
              <BentoV1_23 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 24</h3>
              <BentoV1_24 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 25</h3>
              <BentoV1_25 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 26</h3>
              <BentoV1_26 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 27</h3>
              <BentoV1_27 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 28</h3>
              <BentoV1_28 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 29</h3>
              <BentoV1_29 />
            </div>
            
            <div className="bento-wrapper">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">Bento 30</h3>
              <BentoV1_30 />
            </div>
          </div>
        </div>

        {/* Bento Cards v4 - Crypto Theme */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="text-[#0043FA]">Crypto</span> Cards (v4)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cryptoCards.map((card) => (
              <div key={card.id} className="bento-wrapper">
                <h3 className="text-sm font-semibold text-gray-400 mb-4">{card.title}</h3>
                <BentoCrypto
                  title={card.title}
                  content={card.content}
                  image={card.image}
                  titleButton={card.titleButton}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400">
            All 90 Bento Card components (v2 + v1 + v4) have been successfully imported and are ready to use!
          </p>
          <a
            href="/"
            className="inline-block mt-6 px-8 py-3 rounded-full bg-[#0043FA] text-white font-semibold hover:bg-[#0036C8] transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>

      <style jsx global>{`
        .bento-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.02);
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .bento-wrapper:hover {
          transform: translateY(-4px);
          border-color: rgba(0, 67, 250, 0.5);
          box-shadow: 0 20px 40px rgba(0, 67, 250, 0.1);
        }
      `}</style>
    </main>
  );
}
