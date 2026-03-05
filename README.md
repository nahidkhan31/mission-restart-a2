npm i react router,
tailwind Css and DaisyUi
npm install react-icons
npm install react-toastify
npm install lucide-react

What is JSX, and why is it used? 
    JSX (JavaScript XML) হলো জাভাস্ক্রিপ্টের একটি সিনট্যাক্স এক্সটেনশন। এটি দেখতে অনেকটা HTML-এর মতো হলেও এটি জাভাস্ক্রিপ্টের ভেতরেই লেখা হয়।
    কেন ব্যবহার করা হয়: এটি ডেভেলপারদের জাভাস্ক্রিপ্ট লজিকের মধ্যেই UI-এর গঠন (Structure) লিখতে সাহায্য করে। ব্রাউজার সরাসরি JSX বোঝে না, তাই Babel-এর মতো টুল এটিকে সাধারণ জাভাস্ক্রিপ্টে (React.createElement) রূপান্তর করে। এটি কোডকে আরও সহজপাঠ্য এবং ভিজ্যুয়ালাইজ করতে সাহায্য করে।

What is the difference between State and Props? 
    State: কম্পোনেন্টের নিজস্ব অভ্যন্তরীণ ডেটা। এটি পরিবর্তনযোগ্য (Mutable); কম্পোনেন্ট নিজেই এটি আপডেট করতে পারে। ইউজার ইন্টারঅ্যাকশন বা ডাইনামিক পরিবর্তন ট্র্যাকিংয়ের জন্য।
    Props: প্যারেন্ট কম্পোনেন্ট থেকে চাইল্ড কম্পোনেন্টে পাঠানো ডেটা। এটি Read-only; চাইল্ড এটি পরিবর্তন করতে পারে না। কম্পোনেন্টের মধ্যে যোগাযোগ বা কনফিগারেশনের জন্য।

What is the useState hook, and how does it work? 
    useState হলো React-এর একটি বিল্ট-ইন হুক যা ফাংশনাল কম্পোনেন্টে স্টেট বা ডেটা ধরে রাখতে ব্যবহৃত হয়।
    কীভাবে কাজ করে: এটি একটি অ্যারে রিটার্ন করে যার দুটি উপাদান থাকে—একটি হলো বর্তমান ভ্যালু এবং অন্যটি হলো সেই ভ্যালু আপডেট করার জন্য একটি ফাংশন।
    উদাহরণ: const [count, setCount] = useState(0);। 
    যখনই setCount কল করা হয়, React বুঝতে পারে যে ডেটা পরিবর্তন হয়েছে এবং তখন সে কম্পোনেন্টটিকে পুনরায় রেন্ডার (Re-render) করে।

How can you share state between components in React? 
    Lifting State Up: যখন দুটি চাইল্ড কম্পোনেন্টের একই ডেটা প্রয়োজন হয়, তখন স্টেটটিকে তাদের কমন প্যারেন্ট কম্পোনেন্টে নিয়ে যাওয়া হয় এবং Props-এর মাধ্যমে নিচে পাঠানো হয়।
    Context API: এটি একটি গ্লোবাল স্টেটের মতো কাজ করে, যার ফলে অনেক গভীরে থাকা কম্পোনেন্টেও Prop-drilling ছাড়াই ডেটা পাঠানো যায়।
    State Management Libraries: বড় প্রজেক্টের ক্ষেত্রে Redux বা Zustand-এর মতো লাইব্রেরি ব্যবহার করা হয়।

How is event handling done in React?
    CamelCase: ইভেন্টের নামগুলো camelCase-এ লিখতে হয় (যেমন: onclick-এর বদলে onClick)।
    Function Reference: ইভেন্টে সরাসরি স্ট্রিং না পাঠিয়ে ফাংশনের নাম বা রেফারেন্স পাঠাতে হয়।
    উদাহরণ: <button onClick={handleClick}>Click Me</button>। এখানে handleClick হলো একটি জাভাস্ক্রিপ্ট ফাংশন যা বাটনে ক্লিক করলে ট্রিগার হবে।