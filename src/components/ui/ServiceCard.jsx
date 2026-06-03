import CardContainer from "./CardContainer";

export default function ServiceCard({ icon, title, description, index }) {
  return (
    <CardContainer index={index}>
      {/* حاوية الأيقونة مع الشطفة العلوية المتناسقة */}
      <div
        className="w-[62px] h-[62px] mb-[25px] bg-plasman-gray flex items-center justify-center rounded-[6px]"
        style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)" }}
      >
        {icon}
      </div>

      {/* عنوان البطاقة المنسق */}
      <h3 className="text-[19px] font-bold text-plasman-dark mb-[12px] tracking-tight">
        {title}
      </h3>

      {/* نص الوصف الإرشادي */}
      <p className="text-[14px] text-slate-400 leading-[1.6] mb-[24px] max-w-[210px] font-normal">
        {description}
      </p>

      {/* زر اقرأ المزيد الذكي المعاد ضبطه بأسفل الكارد */}
      <span className="text-[14px] font-bold text-plasman-dark tracking-wide cursor-pointer hover:text-plasman-purple transition-colors duration-200 mt-auto">
        Read More
      </span>
    </CardContainer>
  );
}
