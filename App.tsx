
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  Clock, 
  TrendingUp, 
  ChevronDown, 
  Gift, 
  Star, 
  UserCheck, 
  Target, 
  Flame, 
  AlertTriangle, 
  ArrowDown, 
  Sparkles, 
  Mail, 
  HelpCircle,
  Briefcase,
  Skull,
  EyeOff,
  Layout,
  MousePointer2,
  Users
} from 'lucide-react';

// --- Constants ---
const CHECKOUT_URL = 'https://tuanlamviec4h.com/aichotdon-checkout';
const CURRENT_PRICE = '197.000đ';
const OLD_PRICE = '990.000đ';

// --- Types & Interfaces ---
interface AccordionProps {
  question: string;
  answer: string | React.ReactNode;
}

// --- Components ---

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-yellow-400 transition-colors"
      >
        <span className="text-lg font-bold">{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const CTAButton: React.FC<{ children: React.ReactNode; className?: string; pulse?: boolean }> = ({ children, className, pulse }) => (
  <button 
    onClick={() => window.open(CHECKOUT_URL, '_blank')}
    className={`bg-[#FFD700] hover:bg-[#FFC000] text-black font-extrabold py-5 px-10 rounded-full text-xl shadow-[0_0_25px_rgba(255,215,0,0.5)] transform hover:scale-105 transition-all uppercase flex items-center justify-center gap-3 ${pulse ? 'animate-pulse-gold' : ''} ${className}`}
  >
    {children}
  </button>
);

const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="text-center mb-16 px-4">
    <h2 className={`text-4xl md:text-5xl font-black mb-6 ${light ? 'text-white' : 'gold-text'}`}>
      {title}
    </h2>
    {subtitle && <p className="text-xl text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const EvidenceCard: React.FC<{ icon: React.ReactNode; title: string; imgSrc: string; caption: string }> = ({ icon, title, imgSrc, caption }) => (
  <div className="group relative rounded-[2.5rem] overflow-hidden border border-red-900/50 bg-[#1a0a0a] shadow-[0_0_50px_rgba(153,27,27,0.15)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(153,27,27,0.3)] hover:-translate-y-2">
    {/* Header */}
    <div className="bg-[#2d0f0f] px-8 py-5 border-b border-red-900/50 flex items-center gap-4">
      <div className="bg-red-500/20 p-2 rounded-lg text-red-500">
        {icon}
      </div>
      <span className="text-lg font-black uppercase tracking-[0.2em] text-red-500 drop-shadow-sm">{title}</span>
    </div>
    
    {/* Image Container */}
    <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center p-2">
      <img 
        src={imgSrc} 
        alt={title} 
        className="w-full h-full object-cover filter drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-125 cursor-zoom-in"
      />
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0a] via-transparent to-transparent opacity-40 pointer-events-none"></div>
    </div>

    {/* Caption/Footer */}
    <div className="bg-black/90 p-8 text-center border-t border-red-900/20">
      <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
        "{caption}"
      </p>
    </div>
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [tomorrowDateStr, setTomorrowDateStr] = useState('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);

    // Calculate tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const day = tomorrow.getDate();
    const month = tomorrow.getMonth() + 1;
    setTomorrowDateStr(`Ưu đãi sẽ kết thúc vào 23h:59 ngày ${day} tháng ${month}`);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-yellow-500 selection:text-black">
      {/* Sticky Top Bar (Promo) */}
      <div className="bg-yellow-500 text-black text-center py-2 text-sm font-bold animate-pulse z-[60] relative">
        ƯU ĐÃI GIẢM 80% - CHỈ CÒN {CURRENT_PRICE} TRONG HÔM NAY!
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-transparent to-transparent -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span className="text-sm font-semibold text-yellow-500">Dành cho chủ SHOP & Agency làm Chatbot</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black leading-[1.2] mb-8 max-w-4xl mx-auto">
            Chatbot của bạn đang <span className="text-red-500">làm mất khách</span> vì trả lời khô, dài dòng?
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Trong <span className="text-white font-bold">60 phút</span>, bạn có thể bật một <span className="text-white font-bold">AI Chatbot trả lời tự nhiên như người thật</span>, bám đuổi khéo và dẫn dắt khách tới hành động mua — mà không cần kỹ thuật.
          </p>

          <div className="flex flex-col items-center gap-6">
            <CTAButton pulse>
              NHẬN BỘ “AI CHỐT ĐƠN TỰ NHIÊN” NGAY ({CURRENT_PRICE})
              <ArrowRight size={24} />
            </CTAButton>
            <p className="text-gray-500 italic">Nền tảng kéo thả như mindmap, không dùng n8n, không cần biết code</p>
          </div>
          
          <div className="mt-20 flex justify-center">
             <div className="relative glass-card p-2 md:p-4 rounded-3xl max-w-4xl w-full">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <iframe 
                    src="https://player.mediadelivery.net/embed/568035/05939ceb-6784-4487-9293-4e0d052bd18c" 
                    loading="lazy" 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" 
                    allowFullScreen={true}
                  ></iframe>
                </div>
                <div className="absolute -bottom-6 -right-6 md:right-10 bg-black p-5 rounded-xl border border-yellow-500/50 flex items-center gap-4 shadow-2xl z-10">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <TrendingUp className="text-green-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Chốt được nhiều hơn</p>
                    <p className="text-lg font-black text-white">+ thêm 10 --&gt; 25+ đơn hàng mỗi ngày</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.1),transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <SectionTitle 
            title="Sự Thật Phũ Phàng" 
            subtitle="Bạn không thiếu khách nhắn tin. Bạn thiếu một cuộc hội thoại đủ tự nhiên để giữ khách ở lại."
          />

          {/* Evidence Section with Image Links */}
          <div className="mb-24 grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <EvidenceCard 
              icon={<EyeOff size={24} />}
              title="BẰNG CHỨNG 01: CHATBOT VÔ HỒN"
              imgSrc="https://storage.googleapis.com/msgsndr/76jwxJS0DcAVoeVK00Z6/media/6944c78659a0a6207fcf8235.png"
              caption="Nhiều khách nhưng chatbot không biết cách khơi gợi, bám đuổi hời hợt."
            />
            <EvidenceCard 
              icon={<XCircle size={24} />}
              title="BẰNG CHỨNG 02: PHẢN HỒI TỆ"
              imgSrc="https://storage.googleapis.com/msgsndr/76jwxJS0DcAVoeVK00Z6/media/6944c786aca6abe7ec7b8ccf.png"
              caption="Trả lời quá dài hoặc im lặng khi khách cần tư vấn nhất."
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
            {[
              { title: "Trả lời kiểu \"máy\"", desc: "Thiếu cảm xúc, không hiểu ngữ cảnh khiến khách cảm thấy bị bỏ rơi." },
              { title: "Văn mẫu quá dài", desc: "Đoạn văn dài dằng dặc khiến khách nản lòng và thoát ngay lập tức." },
              { title: "Chỉ biết trả lời, không biết hỏi ngược", desc: "Máy móc phục vụ, không biết chủ động khai thác nhu cầu thực sự." },
              { title: "Quên béng việc Follow-up", desc: "Khách \"seen\" rồi mất hút vì chatbot không biết cách gợi mở lại." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 p-8 glass-card rounded-[2rem] border-l-4 border-red-500 hover:bg-red-500/5 transition-colors group">
                <div className="bg-red-500/20 p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform">
                  <XCircle className="text-red-500" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center max-w-4xl mx-auto">
            <ArrowDown className="text-red-500 animate-bounce mb-8" size={64} />
            
            <div className="w-full bg-red-600/10 border-2 border-red-600 rounded-[3rem] p-12 text-center animate-shake shadow-[0_0_80px_rgba(220,38,38,0.25)]">
              <AlertTriangle className="mx-auto text-red-500 mb-8" size={80} />
              <h3 className="text-3xl font-black mb-6 text-red-500 uppercase tracking-[0.3em]">HẬU QUẢ:</h3>
              <p className="text-4xl md:text-7xl font-black mb-8 text-white drop-shadow-lg leading-tight">
                MẤT KHÁCH <br className="hidden md:block" /> MỖI NGÀY!
              </p>
              <div className="h-1.5 w-32 bg-red-600 mx-auto mb-10 rounded-full"></div>
              <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Dù bạn chi hàng chục triệu chạy Ads hay đăng bài miệt mài, doanh thu vẫn cứ <span className="text-red-500 font-bold italic">"rò rỉ"</span> đều đặn qua kẽ tay vì chatbot không thể "chạm" được vào khách.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Lời Hứa Từ AI Chốt Đơn" 
            subtitle="Bật chatbot AI tư vấn bán hàng chuyên nghiệp trong 60 phút"
          />
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <MessageSquare size={40} className="text-yellow-500" />, title: "Trả lời Ngắn - Đúng - Tự nhiên", desc: "Không còn những đoạn văn mẫu khô khan." },
              { icon: <Target size={40} className="text-yellow-500" />, title: "Biết hỏi lại để hiểu nhu cầu", desc: "Chatbot chủ động dẫn dắt, không đoán mò ý khách." },
              { icon: <Zap size={40} className="text-yellow-500" />, title: "Biết 'đẩy nhẹ' để chốt đơn", desc: "Tự động đưa ra CTA mềm mại, kích thích khách mua ngay." }
            ].map((item, i) => (
              <div key={i} className="p-8 glass-card rounded-3xl text-center hover:bg-white/5 transition-all">
                <div className="flex justify-center mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Win Section */}
      <section className="py-24 bg-zinc-900 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.05),transparent)]"></div>
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <SectionTitle 
            title="Thấy Kết Quả Sau 60 Phút" 
            subtitle="Chỉ cần làm đúng 3 bước để có một trợ lý AI thực thụ"
          />
          
          <div className="space-y-6 mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center glass-card p-10 rounded-3xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
              <div className="text-7xl font-black text-yellow-500/20 italic">01</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Import bot mẫu dựng sẵn</h3>
                <p className="text-gray-400 text-lg">Hoàn toàn không cần bắt đầu từ số 0. Tải lên và chạy ngay bộ khung chuẩn.</p>
              </div>
              <CheckCircle2 className="text-yellow-500 shrink-0" size={48} />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center glass-card p-10 rounded-3xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
              <div className="text-7xl font-black text-yellow-500/20 italic">02</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Huấn luyện AI chớp nhoáng</h3>
                <p className="text-gray-400 text-lg">Điền thông tin vào chỗ trống <span className="text-white font-bold underline">Prompt Huấn luyện AI</span> và Sản phẩm vào <span className="text-white font-bold underline">File mẫu sẵn</span> (tên SP, giá, lợi ích, FAQ, chính sách).</p>
              </div>
              <CheckCircle2 className="text-yellow-500 shrink-0" size={48} />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center glass-card p-10 rounded-3xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
              <div className="text-7xl font-black text-yellow-500/20 italic">03</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Bật live & Theo dõi Checklist</h3>
                <p className="text-gray-400 text-lg">Bật live sẵn sàng theo Checklist để đảm bảo chatbot của bạn đã chạy được và trả lời khách theo đúng phong cách <span className="text-yellow-500 font-bold">“người thật”</span>.</p>
              </div>
              <CheckCircle2 className="text-yellow-500 shrink-0" size={48} />
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-4 flex items-center gap-2 text-yellow-500 font-bold animate-pulse">
                <Flame size={20} /> CHỈ CẦN 60 PHÚT THIẾT LẬP <Flame size={20} />
            </div>
            <CTAButton className="scale-125 !py-8 !px-16 !text-2xl" pulse>
                <TrendingUp size={32} />
                OK, CHO TÔI BỘ HƯỚNG DẪN ({CURRENT_PRICE})
            </CTAButton>
            <p className="mt-8 text-gray-500 text-sm flex items-center gap-2">
                <Clock size={16}/> {tomorrowDateStr}
            </p>
          </div>
        </div>
      </section>

      {/* Offer Stack */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionTitle 
            title={`Bên Trong Gói ${CURRENT_PRICE} Có Gì?`} 
            subtitle="Mọi thứ bạn cần để biến Chatbot thành Best Seller"
          />
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-8 rounded-3xl group border-t-2 border-transparent hover:border-yellow-500/50 transition-all">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                <Zap className="text-yellow-500 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Bộ Prompt Khung "Điền là chạy"</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-yellow-500 shrink-0"/> Cấu trúc AI nói chuyện tự nhiên</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-yellow-500 shrink-0"/> Quy tắc độ dài câu</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-yellow-500 shrink-0"/> Tập trung chốt đơn</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-3xl group border-t-2 border-transparent hover:border-yellow-500/50 transition-all">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                <UserCheck className="text-yellow-500 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hướng Dẫn Cá Nhân Hoá</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-yellow-500 shrink-0"/> Cách "đổi giọng" theo brand</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-yellow-500 shrink-0"/> Cài ngôn ngữ thuần Việt</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-yellow-500 shrink-0"/> Thân thiện, sang trọng</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-3xl group border-t-2 border-transparent hover:border-yellow-500/50 transition-all">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
                <MessageSquare className="text-yellow-500 group-hover:text-black" />
              </div>
              <h3 className="text-xl font-bold mb-4">Bot Mẫu Import Sẵn</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-yellow-500 shrink-0"/> Ready-to-run: Import dùng ngay</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-yellow-500 shrink-0"/> Data mẫu đa ngành</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-yellow-500 shrink-0"/> E-learning / Retail</li>
              </ul>
            </div>
          </div>

          {/* New Mindmap Showcase Section */}
          <div className="max-w-6xl mx-auto mb-24">
             <div className="glass-card rounded-[3rem] p-12 border-2 border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-1/3 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full mb-6 text-yellow-500 font-black text-sm uppercase tracking-widest">
                       <div className="bg-yellow-500 rounded-full w-4 h-4" /> Giao diện Mindmap
                    </div>
                    <h3 className="text-3xl font-black mb-6 leading-tight">Quản lý Chatbot AI dễ như vẽ Mindmap</h3>
                    <ul className="space-y-4 text-gray-400 text-lg">
                      <li className="flex items-center gap-3"><MousePointer2 size={20} className="text-yellow-500" /> Kéo thả các khối logic trực quan</li>
                      <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-yellow-500" /> Theo dõi luồng AI suy nghĩ & trả lời</li>
                      <li className="flex items-center gap-3"><MessageSquare size={20} className="text-yellow-500" /> Ghi chú rõ ràng từng bước tư vấn</li>
                    </ul>
                  </div>
                  
                  <div className="md:w-2/3 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700">
                    <img 
                      src="https://storage.googleapis.com/msgsndr/76jwxJS0DcAVoeVK00Z6/media/6944ca335b256b5fa6c62a76.png" 
                      alt="AI Chatbot Mindmap Interface" 
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-110 cursor-zoom-in"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
             </div>
          </div>

          {/* Bonuses */}
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
                <div className="h-px bg-white/10 flex-1"></div>
                <div className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-black px-8 py-3 rounded-full font-black flex items-center gap-2 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                    <Gift size={24} /> QUÀ TẶNG KÈM CỰC KHỦNG
                </div>
                <div className="h-px bg-white/10 flex-1"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="group relative glass-card p-1 rounded-3xl overflow-hidden hover:scale-105 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-transparent -z-10 group-hover:bg-yellow-500/30"></div>
                  <div className="bg-zinc-950 rounded-[inherit] p-8 h-full border border-white/5">
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-yellow-500/10 p-4 rounded-2xl">
                        <MessageSquare className="text-yellow-500" size={32} />
                      </div>
                      <div className="bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter">Limited Bonus</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gold-text">Luồng Follow-up Tự Nhiên</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">1 kịch bản bám đuổi tinh tế cho các trường hợp: hỏi giá rồi im, chưa mua, để lại SĐT...</p>
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-gray-600 line-through text-sm">1.200.000đ</span>
                      <span className="text-yellow-500 font-black text-xl">MIỄN PHÍ</span>
                    </div>
                  </div>
                </div>

                <div className="group relative glass-card p-1 rounded-3xl overflow-hidden hover:scale-105 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-bl from-yellow-500/20 via-transparent to-transparent -z-10 group-hover:bg-yellow-500/30"></div>
                  <div className="bg-zinc-950 rounded-[inherit] p-8 h-full border border-white/5">
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-yellow-500/10 p-4 rounded-2xl">
                        <Target className="text-yellow-500" size={32} />
                      </div>
                      <div className="bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-tighter">Limited Bonus</div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 gold-text">Mini-CRM Quản Lý Khách</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">Tích hợp sẵn CRM pipeline quản lý khách hàng: Khách mới → Tìm hiểu → Chưa thanh toán → Đã mua. Không bao giờ bỏ sót khách.</p>
                    <div className="flex items-center gap-2 mt-auto">
                      <span className="text-gray-600 line-through text-sm">500.000đ</span>
                      <span className="text-yellow-500 font-black text-xl">MIỄN PHÍ</span>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className="mt-12 text-center text-gray-500 flex items-center justify-center gap-2 animate-pulse">
              <span className="flex items-center gap-2"><Sparkles size={16} /> Chỉ áp dụng khi đăng ký trong hôm nay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
             {/* Suitable Audience Card */}
             <div className="group relative p-10 glass-card rounded-[3rem] border-4 border-green-500/30 bg-green-500/5 hover:border-green-500/60 hover:bg-green-500/10 transition-all flex flex-col items-center shadow-[0_20px_50px_rgba(34,197,94,0.1)]">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full border-4 border-green-500 p-2 mb-8 bg-zinc-900 shadow-[0_0_30px_rgba(34,197,94,0.4)] transform group-hover:scale-110 transition-transform">
                   <div className="w-full h-full rounded-full bg-gradient-to-br from-green-500/40 to-green-500/10 flex items-center justify-center">
                      <Briefcase className="text-green-400" size={56} />
                   </div>
                </div>
                
                <div className="bg-green-500 text-black px-4 py-1 rounded-full text-xs font-black mb-4 uppercase tracking-tighter">BEST FOR YOU</div>
                
                <h3 className="text-3xl font-black mb-8 text-green-500 text-center uppercase tracking-tight">
                  Phù hợp nếu bạn:
                </h3>
                <ul className="space-y-6 w-full">
                    <li className="flex gap-4 items-start text-gray-200">
                        <div className="bg-green-500/20 p-1 rounded-full shrink-0">
                          <CheckCircle2 className="text-green-500" size={24} />
                        </div>
                        <span className="text-lg font-bold leading-tight">Đang bán hàng qua chat mỗi ngày (Fanpage, Zalo, Website...)</span>
                    </li>
                    <li className="flex gap-4 items-start text-gray-200">
                        <div className="bg-green-500/20 p-1 rounded-full shrink-0">
                          <CheckCircle2 className="text-green-500" size={24} />
                        </div>
                        <span className="text-lg font-bold leading-tight">Muốn chatbot trả lời tự nhiên để giữ khách & chốt tốt hơn</span>
                    </li>
                    <li className="flex gap-4 items-start text-gray-200">
                        <div className="bg-green-500/20 p-1 rounded-full shrink-0">
                          <CheckCircle2 className="text-green-500" size={24} />
                        </div>
                        <span className="text-lg font-bold leading-tight">Không muốn phụ thuộc kỹ thuật, muốn tự chủ vận hành hoàn toàn</span>
                    </li>
                </ul>
             </div>

             {/* NOT Suitable Audience Card */}
             <div className="group relative p-10 glass-card rounded-[3rem] border-4 border-red-500/20 bg-red-500/5 hover:border-red-500/40 hover:bg-red-500/10 transition-all flex flex-col items-center opacity-90 hover:opacity-100 shadow-[0_20px_50px_rgba(239,68,68,0.05)]">
                {/* Avatar */}
                <div className="w-32 h-32 rounded-full border-4 border-red-500/50 p-2 mb-8 bg-zinc-900 shadow-[0_0_30px_rgba(239,68,68,0.2)] transform group-hover:scale-110 transition-transform">
                   <div className="w-full h-full rounded-full bg-gradient-to-br from-red-500/40 to-green-500/10 flex items-center justify-center">
                      <Skull className="text-red-400" size={56} />
                   </div>
                </div>

                <div className="bg-red-500/20 text-red-500 px-4 py-1 rounded-full text-xs font-black mb-4 uppercase tracking-tighter">NOT FOR YOU</div>

                <h3 className="text-3xl font-black mb-8 text-red-500 text-center uppercase tracking-tight">
                  KHÔNG phù hợp nếu:
                </h3>
                <ul className="space-y-6 w-full">
                    <li className="flex gap-4 items-start text-gray-400">
                        <div className="bg-red-500/10 p-1 rounded-full shrink-0">
                          <XCircle className="text-red-500" size={24} />
                        </div>
                        <span className="text-lg font-medium">Muốn "mua xong auto ra đơn" mà không cần nhập thông tin sản phẩm</span>
                    </li>
                    <li className="flex gap-4 items-start text-gray-400">
                        <div className="bg-red-500/10 p-1 rounded-full shrink-0">
                          <XCircle className="text-red-500" size={24} />
                        </div>
                        <span className="text-lg font-medium">Không có sản phẩm/dịch vụ rõ ràng hoặc không bán qua chat</span>
                    </li>
                    <li className="flex gap-4 items-start text-gray-400">
                        <div className="bg-red-500/10 p-1 rounded-full shrink-0">
                          <XCircle className="text-red-500" size={24} />
                        </div>
                        <span className="text-lg font-medium">Đang tìm kiếm một giải pháp kỹ thuật phức tạp thay vì hiệu quả thực tế</span>
                    </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* About Nam Section */}
      <section className="py-24 bg-black border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="md:w-3/5 space-y-8 order-2 md:order-1">
              <h2 className="text-5xl font-black text-[#bf953f] italic font-serif">Nam đây!</h2>
              <div className="space-y-6 text-xl text-gray-300 leading-relaxed font-light">
                <p>
                  Tôi là người một <strong className="text-white font-bold">Digital CEO - Vận hành doanh nghiệp 1 người</strong>, sáng lập cộng đồng <strong className="text-white font-bold">Tuần Làm Việc 4h</strong>, nơi tôi giúp các thành viên của mình tạo ra lộ trình chi tiết, từng bước để họ có thể sử dụng tài năng của mình nhằm xây dựng và sở hữu một đế chế kinh doanh trực tuyến có thể vận hành chỉ với một người—là chính bạn.
                </p>
                <p>
                  Trước đây, tôi đã dành hàng giờ làm những công việc lặp đi lặp lại như tư vấn, chăm sóc khách hàng tiềm năng, khiến tôi kiệt sức và thiếu thời gian để thu hút khách hàng mới hoặc chăm sóc khách hàng hiện tại. Vòng lặp căng thẳng này đã khiến tôi mong muốn có ai đó có thể làm thay mình.
                </p>
                <p className="text-white font-medium border-l-4 border-yellow-500 pl-6 py-2 bg-yellow-500/5">
                  A.I đã cách mạng hóa doanh nghiệp của tôi, tự động hóa gần 100% các hoạt động bán hàng, và tôi ở đây để chia sẻ cách bạn có thể áp dụng điều này vào doanh nghiệp của chính mình.
                </p>
              </div>
            </div>
            <div className="md:w-2/5 relative order-1 md:order-2">
              <div className="absolute -inset-10 bg-yellow-500/10 blur-[100px] rounded-full -z-10"></div>
              <div className="relative group">
                <img 
                  src="https://digibizsuccess.net/wp-content/uploads/2024/03/Nam-Trinh-va-Digibiz-Team-chuong-trinh-khoi-nghiep-tinh-gon-1.png" 
                  alt="Nam Trịnh" 
                  className="w-full h-auto drop-shadow-[0_20px_80px_rgba(191,149,63,0.3)] transform transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle 
            title="Giải Đáp Thắc Mắc" 
            subtitle="Mọi câu hỏi bạn cần lời giải đáp trước khi bắt đầu"
          />
          <div className="glass-card p-10 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-yellow-500/5 -z-10">
               <HelpCircle size={300} strokeWidth={1} />
            </div>
            
            <Accordion 
              question="1) Tôi không rành kỹ thuật, làm được không?" 
              answer="Được. Bộ này thiết kế theo hướng “import – điền form – test”, thao tác kéo thả trực quan. Bạn làm theo video là xong."
            />
            <Accordion 
              question="2) Chỉ dùng cho Fanpage hay dùng đa nền tảng?" 
              answer={
                <span>
                  Bạn có thể triển khai cho nhiều kênh (tùy hạ tầng bạn đang có). Phần quan trọng nhất là <strong>prompt + data + luồng hội thoại</strong>, bạn làm 1 lần và tái sử dụng.
                </span>
              }
            />
            <Accordion 
              question="3) Tôi đang dùng n8n rồi, có cần không?" 
              answer={
                <span>
                  n8n mạnh về automation/kết nối app. Gói này tập trung vào <strong>hội thoại bán hàng tự nhiên + kịch bản follow-up + cách cài để dễ vận hành cho chủ doanh nghiệp</strong>.
                </span>
              }
            />
            <Accordion 
              question="4) Công cụ chatbot là gì và chi phí thế nào?" 
              answer="Trong bộ hướng dẫn, bạn sẽ được hướng dẫn triển khai trên nền tảng chatbot kéo thả dễ dùng (Botsumo) và cách lựa chọn mô hình AI phù hợp chi phí. Bạn có thể chủ động chọn nhà cung cấp AI (nếu nền t hỗ trợ) để tối ưu ngân sách."
            />
            <Accordion 
              question="5) Tôi hỏi thêm ở đâu?" 
              answer={
                <div className="flex flex-col gap-3">
                  <p>After you buy, you have clear instructions. If you have any further questions, send an email to <span className="text-yellow-500 font-bold underline">hi@digibizsuccess.net</span> for support.</p>
                  <a href="mailto:hi@digibizsuccess.net" className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-bold transition-colors">
                    <Mail size={18} /> Gửi email hỗ trợ ngay
                  </a>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-zinc-900 border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card p-12 rounded-[3rem] border-2 border-yellow-500/30 text-center relative">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <ShieldCheck size={96} className="text-yellow-500 fill-black" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black mb-8 mt-6">CAM KẾT HOÀN TIỀN 100%</h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-left">
                <p>Giao dịch mua hàng của bạn được đảm bảo hoàn tiền.</p>
                <p>Tôi biết rằng trước khi đi vào chi tiết… tôi muốn biết mình đang mua gì và nó được đảm bảo hoàn tiền chắc chắn.</p>
                <p>Và tôi muốn bạn cảm thấy thoải mái với giao dịch mua này.</p>
                <p>V Và mặc dù chỉ có 197.000 Vnđ – bạn đã làm việc vất vả để kiếm được số tiền đó và nó rất đáng giá.</p>
                <p>Như ông tôi thường nói “Hãy lái thử xe trước khi lái nó ra khỏi bãi đậu xe”… </p>
                <p>Vì vậy, đây là những gì tôi đã sắp xếp:</p>
                <p>Bạn sẽ được truy cập ngay lập tức vào khóa học, học các module, nhưng quan trọng nhất là hãy hành động dựa trên những gì bạn khám phá được bên trong.</p>
                <p>Và nếu bạn không hài lòng với những gì bạn học được.</p>
                <p>Thì chỉ cần gửi email cho chúng tôi theo địa chỉ <span className="text-yellow-500 font-bold underline">hi@digibizsuccess.net</span> và yêu cầu hoàn tiền trong vòng 30 ngày + Video những gì bạn đã áp dụng vào trang facebook doanh nghiệp đang vận hành thực tế của mình từ những gì đã học và lý do không hiệu quả với bạn.</p>
                <p>Chúng tôi sẽ hoàn lại cho bạn 197.000 Vnđ + video review trực tiếp trường hợp của bạn và bạn vẫn được giữ lại các tài liệu học tập trực tuyến miễn phí.</p>
                <p className="font-black text-white italic">Chính sách hoàn tiền như vậy có tốt không? Tôi nghĩ là khá tốt đấy!</p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Mọi thắc mắc gửi về:</p>
                    <p className="text-xl font-bold text-yellow-500 underline">hi@digibizsuccess.net</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 font-medium italic">Founder DigibizSuccess</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase">BẬT CHẾ ĐỘ "TỰ ĐỘNG CHỐT ĐƠN" NGAY!</h2>
          <p className="text-2xl text-gray-400 mb-12">Sở hữu toàn bộ bộ giải pháp chỉ với:</p>
          
          <div className="mb-12 flex items-center justify-center gap-6">
            <span className="text-gray-500 line-through text-4xl">{OLD_PRICE}</span>
            <span className="text-8xl font-black gold-text drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">{CURRENT_PRICE}</span>
          </div>
          
          <CTAButton className="mx-auto scale-150 mb-12" pulse>
            <Flame size={32} /> NHẬN NGAY – BẬT CHATBOT TRONG 60 PHÚT
          </CTAButton>
          
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-50 mt-12">
            <div className="flex items-center gap-2 font-bold"><ShieldCheck size={20}/> Thanh toán bảo mật</div>
            <div className="flex items-center gap-2 font-bold"><Clock size={20}/> Truy cập trọn đời</div>
            <div className="flex items-center gap-2 font-bold"><Mail size={20}/> Hỗ trợ qua Email</div>
          </div>
        </div>
        
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          {/* Logo Brand */}
          <div className="mb-10">
            <img 
              src="https://digibizsuccess.net/wp-content/uploads/elementor/thumbs/Digibiz-Email-Sign-pvwwr4ij8aphkqgoujnuxggz8uf1q4tri59ku378z4.png" 
              alt="Digibiz Success Logo" 
              className="mx-auto h-16 w-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            />
          </div>

          <p className="mb-6 text-gray-400 font-bold text-lg">© 2026 AI CHỐT ĐƠN TỰ NHIÊN. All Rights Reserved by Nam Trịnh </p>
          
          <div className="flex justify-center gap-8 text-sm text-gray-500 mb-12">
            <a href="#" className="hover:text-yellow-500 transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">Liên hệ</a>
          </div>

          {/* Facebook Disclaimer */}
          <div className="max-w-4xl mx-auto border-t border-white/10 pt-10">
            <p className="text-[10px] md:text-[11px] text-gray-600 leading-relaxed uppercase tracking-[0.15em] font-medium opacity-60 hover:opacity-100 transition-opacity">
              hi@digibizsuccess.net This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      {isScrolled && (
        <div className="fixed bottom-0 left-0 w-full p-4 bg-black/90 backdrop-blur-xl border-t border-white/10 z-50 md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <button 
            onClick={() => window.open(CHECKOUT_URL, '_blank')}
            className="w-full bg-[#FFD700] text-black font-black py-4 rounded-xl text-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            ĐĂNG KÝ NGAY {CURRENT_PRICE} <Flame size={20}/>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
