import CustomHeader from "../../Layout/CustomHeader";

const data = [
  { Chapter: "Revelation - كتاب بدء الوحى" },
  { Chapter: "Belief - كتاب الإيمان" },
  { Chapter: "Knowledge - كتاب العلم" },
  { Chapter: "Ablutions (Wudu') - كتاب الوضوء" },
  { Chapter: "Bathing (Ghusl) - كتاب الغسل" },
  { Chapter: "Menstrual Periods - كتاب الحيض" },
  { Chapter: "Rubbing hands and feet with dust (Tayammum) - كتاب التيمم" },
  { Chapter: "Prayers (Salat) - كتاب الصلاة" },
  { Chapter: "Times of the Prayers - كتاب مواقيت الصلاة" },
  { Chapter: "Call to Prayers (Adhaan) - كتاب الأذان" },
  { Chapter: "Friday Prayer - كتاب الجمعة" },
  { Chapter: "Fear Prayer - كتاب صلاة الخوف" },
  { Chapter: "The Two Festivals (Eids) - كتاب العيدين" },
  { Chapter: "Witr Prayer - كتاب الوتر" },
  { Chapter: "Invoking Allah for Rain (Istisqaa) - كتاب الاستسقاء" },
  { Chapter: "Eclipses - كتاب الكسوف" },
  { Chapter: "Prostration During Recital of Qur'an - كتاب سجود القرآن" },
  { Chapter: "Shortening the Prayers (At-Taqseer) - كتاب التقصير" },
  { Chapter: "Prayer at Night (Tahajjud) - كتاب التهجد" },
  {
    Chapter:
      "Virtues of Prayer at Masjid Makkah and Madinah - كتاب فضل الصلاة فى مسجد مكة والمدينة",
  },
  { Chapter: "Actions while Praying - كتاب العمل فى الصلاة" },
  { Chapter: "Forgetfulness in Prayer - كتاب السهو" },
  { Chapter: "Funerals (Al-Janaa'iz) - كتاب الجنائز" },
  { Chapter: "Obligatory Charity Tax (Zakat) - كتاب الزكاة" },
  { Chapter: "Hajj (Pilgrimage) - كتاب الحج" },
  { Chapter: "`Umrah (Minor pilgrimage) - كتاب العمرة" },
  {
    Chapter: "Pilgrims Prevented from Completing the Pilgrimage - كتاب المحصر",
  },
  { Chapter: "Penalty of Hunting while on Pilgrimage - كتاب جزاء الصيد" },
  { Chapter: "Virtues of Madinah - كتاب فضائل المدينة" },
  { Chapter: "Fasting - كتاب الصوم" },
  { Chapter: "Praying at Night in Ramadaan (Taraweeh) - كتاب صلاة التراويح" },
  { Chapter: "Virtues of the Night of Qadr - كتاب فضل ليلة القدر" },
  {
    Chapter:
      "Retiring to a Mosque for Remembrance of Allah (I'tikaf) - كتاب الاعتكاف",
  },
  { Chapter: "Sales and Trade - كتاب البيوع" },
  {
    Chapter:
      "Sales in which a Price is paid for Goods to be Delivered Later (As-Salam) - كتاب السلم",
  },
  { Chapter: "Shuf'a - كتاب الشفعة" },
  { Chapter: "Hiring - كتاب الإجارة" },
  {
    Chapter:
      "Transferance of a Debt from One Person to Another (Al-Hawaala) - كتاب الحوالات",
  },
  { Chapter: "Kafalah - كتاب الكفالة" },
  {
    Chapter: "Representation; Authorization; Business by Proxy - كتاب الوكالة",
  },
  { Chapter: "Agriculture - كتاب المزارعة" },
  { Chapter: "Distribution of Water - كتاب المساقاة" },
  {
    Chapter:
      "Loans; Payment of Loans; Freezing of Property; Bankruptcy - كتاب فى الاستقراض",
  },
  { Chapter: "Khusoomaat - كتاب الخصومات" },
  { Chapter: "Lost Things Picked up by Someone (Luqatah) - كتاب فى اللقطة" },
  { Chapter: "Oppressions - كتاب المظالم" },
  { Chapter: "Partnership - كتاب الشركة" },
  { Chapter: "Mortgaging - كتاب الرهن" },
  { Chapter: "Manumission of Slaves - كتاب العتق" },
  { Chapter: "Makaatib - كتاب المكاتب" },
  { Chapter: "Gifts - كتاب الهبة وفضلها والتحريض عليها" },
  { Chapter: "Witnesses - كتاب الشهادات" },
  { Chapter: "Peacemaking - كتاب الصلح" },
  { Chapter: "Conditions - كتاب الشروط" },
  { Chapter: "Wills and Testaments (Wasaayaa) - كتاب الوصايا" },
  { Chapter: "Fighting for the Cause of Allah (Jihaad) - كتاب الجهاد والسير" },
  {
    Chapter:
      "One-fifth of Booty to the Cause of Allah (Khumus) - كتاب فرض الخمس",
  },
  { Chapter: "Jizyah and Mawaada'ah - كتاب الجزية والموادعة" },
  { Chapter: "Beginning of Creation - كتاب بدء الخلق" },
  { Chapter: "Prophets - كتاب أحاديث الأنبياء" },
  {
    Chapter:
      "Virtues and Merits of the Prophet (pbuh) and his Companions - كتاب المناقب",
  },
  {
    Chapter:
      "Companions of the Prophet - كتاب فضائل أصحاب النبى صلى الله عليه وسلم",
  },
  { Chapter: "Merits of the Helpers in Madinah (Ansaar) - كتاب مناقب الأنصار" },
  {
    Chapter:
      "Military Expeditions led by the Prophet (pbuh) (Al-Maghaazi) - كتاب المغازى",
  },
  {
    Chapter:
      "Prophetic Commentary on the Qur'an (Tafseer of the Prophet (pbuh)) - كتاب التفسير",
  },
  { Chapter: "Virtues of the Qur'an - كتاب فضائل القرآن" },
  { Chapter: "Wedlock; Marriage (Nikaah) - كتاب النكاح" },
  { Chapter: "Divorce - كتاب الطلاق" },
  { Chapter: "Supporting the Family - كتاب النفقات" },
  { Chapter: "Food; Meals - كتاب الأطعمة" },
  { Chapter: "Sacrifice on Occasion of Birth (`Aqiqa) - كتاب العقيقة" },
  { Chapter: "Hunting; Slaughtering - كتاب الذبائح والصيد" },
  { Chapter: "Al-Adha Festival Sacrifice (Adaahi) - كتاب الأضاحي" },
  { Chapter: "Drinks - كتاب الأشربة" },
  { Chapter: "Patients - كتاب المرضى" },
  { Chapter: "Medicine - كتاب الطب" },
  { Chapter: "Dress - كتاب اللباس" },
  { Chapter: "Good Manners and Form (Al-Adab) - كتاب الأدب" },
  { Chapter: "Asking Permission - كتاب الاستئذان" },
  { Chapter: "Invocations - كتاب الدعوات" },
  { Chapter: "To make the Heart Tender (Ar-Riqaq) - كتاب الرقاق" },
  { Chapter: "Divine Will (Al-Qadar) - كتاب القدر" },
  { Chapter: "Oaths and Vows - كتاب الأيمان والنذور" },
  { Chapter: "Expiation for Unfulfilled Oaths - كتاب كفارات الأيمان" },
  { Chapter: "Laws of Inheritance (Al-Faraa'id) - كتاب الفرائض" },
  { Chapter: "Limits and Punishments set by Allah (Hudood) - كتاب الحدود" },
  {
    Chapter:
      "Punishment of Disbelievers at War with Allah and His Apostle - كتاب المحاربين من أهل الكفر والردة",
  },
  { Chapter: "Blood Money (Ad-Diyat) - كتاب الديات" },
  {
    Chapter:
      "Dealing with Apostates - كتاب استتابة المرتدين والمعاندين وقتالهم",
  },
  { Chapter: "Saying Something under Compulsion (Ikraah) - كتاب الإكراه" },
  { Chapter: "Tricks - كتاب الحيل" },
  { Chapter: "Interpretation of Dreams - كتاب التعبير" },
  { Chapter: "Afflictions and the End of the World - كتاب الفتن" },
  { Chapter: "Judgments (Ahkaam) - كتاب الأحكام" },
  { Chapter: "Wishes - كتاب التمنى" },
  {
    Chapter:
      "Accepting Information Given by a Truthful Person - كتاب أخبار الآحاد",
  },
  {
    Chapter:
      "Holding Fast to the Qur'an and Sunnah - كتاب الاعتصام بالكتاب والسنة",
  },
  { Chapter: "Oneness; Uniqueness of Allah (Tawheed) - كتاب التوحيد" },
];

export function getChapters() {
  return data;
}
