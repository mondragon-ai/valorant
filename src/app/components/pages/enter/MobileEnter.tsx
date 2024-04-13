"use client";
import Image from "next/image";
import LoginForm from "../../shared/enter/Login";
import styles from "../Pages.module.css";
import {useState} from "react";
import RegisterForm from "../../shared/enter/RegisterForm";

export default function MobileEnter() {
  const [isLogin, setForm] = useState(true);
  return (
    <main className={styles.mainPage} style={{paddingBottom: "3rem"}}>
      <div className={styles.bkgImg}>
        <Image
          src={
            "https://wallpapers.com/images/featured/reyna-ai4mldgkdenv8w9z.jpg"
          }
          alt={""}
          width={10000}
          height={10000}
        />
      </div>
      <header className={styles.enterHeader}>
        <svg
          style={{margin: "1rem 0"}}
          width="130"
          height="30"
          viewBox="0 0 130 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.7494 0.0223083V12.5444L0.0161518 18.7784V6.33706C0.0107776 6.33435 0.00540335 6.33113 2.91022e-05 6.3279L1.42786e-05 6.32789L0 6.32788L1.4279e-05 6.32788L2.90954e-05 6.32787C0.00540334 6.32464 0.0107776 6.32142 0.0161518 6.31871V6.31047L10.7494 0.0223083ZM23.6999 19.7459C23.6999 19.9747 23.6267 20.0972 23.4283 20.211C19.1724 22.6636 14.9188 25.1203 10.6653 27.5769L6.80478 29.8064C6.74402 29.8415 6.68133 29.8732 6.604 29.9123C6.56541 29.9318 6.52319 29.9532 6.47574 29.9777V29.646L6.47597 27.7152V27.7152V27.7151V27.7151V27.715V27.715V27.715V27.7149V27.7149V27.7148C6.47642 25.2694 6.47686 22.8241 6.47086 20.3785C6.47031 20.1503 6.54133 20.0267 6.74027 19.9123C8.11364 19.124 9.48519 18.3327 10.8568 17.5413L10.857 17.5411L10.8583 17.5404L10.8586 17.5402L10.8599 17.5395C12.1839 16.7756 13.5079 16.0116 14.8336 15.2504C15.0401 15.1322 15.1176 15.0059 15.1165 14.7642C15.1121 13.1709 15.1114 11.5776 15.1106 9.98423C15.1099 8.45221 15.1091 6.92019 15.1051 5.38831C15.1046 5.16659 15.1794 5.04842 15.3653 4.94109C17.3835 3.78079 19.3997 2.61684 21.416 1.45289C22.0882 1.06486 22.7604 0.676829 23.4326 0.288935C23.4759 0.263842 23.521 0.242019 23.579 0.213928L23.5791 0.213849L23.5795 0.213693C23.6128 0.197542 23.6504 0.179316 23.6944 0.157209V0.479206L23.6944 2.88641C23.6943 8.50607 23.6942 14.1258 23.6999 19.7459ZM46.3887 11.2744C46.3611 10.1924 46.0418 9.15435 45.4889 8.21492C44.1006 5.85524 41.9301 4.76457 39.2869 4.67024C37.4066 4.60361 35.5233 4.61294 33.6401 4.62228C32.7045 4.62692 31.7689 4.63155 30.8337 4.62688C30.5664 4.62525 30.5507 4.74776 30.5512 4.95701C30.5548 7.73445 30.5547 10.5123 30.5545 13.2898L30.5545 14.9557V24.9279C30.5545 25.2797 30.5545 25.2808 30.9133 25.2808C31.3302 25.2809 31.7471 25.2818 32.1639 25.2826H32.164H32.1641C33.1925 25.2846 34.2211 25.2867 35.2495 25.2786C35.5928 25.2758 35.9362 25.2746 36.2797 25.2735C37.4532 25.2695 38.627 25.2656 39.797 25.1951C41.0319 25.1214 42.2071 24.7446 43.2544 24.0546C45.3707 22.6593 46.3649 20.621 46.4343 18.1535C46.4988 15.8626 46.4467 13.5669 46.3887 11.2744ZM41.1132 18.5969C40.9565 19.6615 39.997 20.6427 38.9199 20.7338C38.1812 20.7963 37.4371 20.7953 36.6932 20.7942C36.444 20.7939 36.1949 20.7935 35.946 20.7956C35.8891 20.7956 35.8127 20.6926 35.7796 20.6221C35.7599 20.5803 35.7643 20.5274 35.7688 20.4747C35.7707 20.4521 35.7726 20.4296 35.7726 20.408V14.9362C35.7726 14.4896 35.7728 14.0431 35.7731 13.5966C35.7739 12.2013 35.7747 10.8062 35.7677 9.41076C35.7666 9.17712 35.823 9.09797 36.0675 9.1034C36.5328 9.11304 36.9982 9.11167 37.4635 9.11029H37.4639C37.7568 9.10942 38.0497 9.10856 38.3426 9.11044C39.9612 9.12128 41.1289 10.2217 41.1706 11.8377C41.2161 13.624 41.2198 15.4115 41.2235 17.1989L41.2238 17.3317C41.2248 17.7534 41.175 18.1784 41.1132 18.5969ZM129.832 10.8959C129.915 11.5203 129.974 12.1519 129.982 12.7812C130.003 14.3343 130.009 15.889 129.981 17.4421C129.958 18.7013 129.795 19.9508 129.256 21.1054C128.2 23.3665 126.371 24.706 123.983 25.247C122.253 25.6389 120.484 25.6226 118.807 24.9851C115.995 23.9151 114.217 21.9365 113.879 18.8677C113.781 17.974 113.747 17.0731 113.713 16.1723C113.698 15.765 113.683 15.3578 113.661 14.9512L113.713 14.9498L113.765 14.9485C113.765 14.6387 113.76 14.3287 113.756 14.0187C113.746 13.3255 113.736 12.6324 113.776 11.9421C113.87 10.2692 114.236 8.66032 115.358 7.34305C116.708 5.758 118.4 4.76491 120.5 4.53236C122.033 4.36214 123.562 4.37678 125.008 4.95464C127.704 6.03121 129.441 7.9323 129.832 10.8959ZM122.035 20.9732C123.315 20.9282 124.37 20.0836 124.539 18.8146C124.658 17.9194 124.722 17.017 124.783 16.1541L124.783 16.1527C124.809 15.7861 124.834 15.4267 124.863 15.078C124.834 14.664 124.809 14.2616 124.784 13.8674L124.784 13.867C124.729 12.9966 124.677 12.1664 124.596 11.3393C124.49 10.254 123.94 9.44362 122.874 9.09669C122.474 8.96659 122.023 8.94762 121.596 8.95304C120.425 8.96768 119.409 9.78188 119.215 10.9344C119.058 11.8646 118.964 12.8148 118.95 13.7575C118.93 15.1458 118.978 16.5379 119.057 17.9245C119.087 18.4633 119.19 19.0352 119.417 19.5188C119.924 20.5991 120.864 21.0138 122.035 20.9732ZM64.7296 21.1359C64.7122 22.4092 64.7166 23.6831 64.7269 24.9565C64.7291 25.1961 64.6738 25.286 64.4157 25.2855C59.7728 25.2785 55.1304 25.2785 50.4875 25.286C50.2278 25.286 50.1763 25.1944 50.1768 24.9559C50.1825 22.2578 50.1822 19.5593 50.1819 16.861L50.1817 14.9572V4.98559C50.1817 4.63269 50.1823 4.63161 50.54 4.63161H64.3599C64.7215 4.63161 64.722 4.63269 64.722 4.98071C64.722 5.31147 64.7214 5.64223 64.7207 5.97298C64.719 6.90687 64.7172 7.84068 64.7296 8.7742C64.7334 9.06042 64.6434 9.11517 64.3778 9.11409C62.033 9.10652 59.6887 9.10736 57.3444 9.10821L55.815 9.10867C55.5375 9.10867 55.3987 9.25142 55.3987 9.53691C55.3987 9.78708 55.3994 10.0372 55.4001 10.2874V10.288C55.4019 10.95 55.4038 11.6119 55.3928 12.2739C55.3884 12.5406 55.4524 12.6273 55.7354 12.6257C57.0593 12.6192 58.3833 12.6188 59.7071 12.6184C60.8219 12.6181 61.9367 12.6177 63.0513 12.6138C63.2969 12.6127 63.3749 12.6739 63.3722 12.9287C63.3598 14.2108 63.3592 15.4939 63.3722 16.7759C63.3749 17.0317 63.2947 17.0941 63.0508 17.093C61.0513 17.0867 59.0515 17.0875 57.052 17.0883L55.789 17.0887C55.3993 17.0887 55.3987 17.0898 55.3987 17.4725C55.3987 17.7475 55.3994 18.0224 55.4001 18.2974C55.402 19.0251 55.4038 19.7526 55.3928 20.4805C55.3884 20.7477 55.4762 20.8095 55.7316 20.809C57.1449 20.805 58.5582 20.8044 59.9716 20.8038C61.4394 20.8032 62.9072 20.8026 64.3751 20.7981C64.6374 20.7976 64.7339 20.8453 64.7296 21.1353V21.1359ZM102.433 4.92516L102.523 4.65533C102.471 4.65212 102.423 4.64838 102.378 4.64488C102.295 4.63832 102.222 4.63257 102.148 4.63257C101.68 4.63208 101.211 4.63252 100.742 4.63297C99.6571 4.634 98.5721 4.63504 97.487 4.62444C97.1965 4.62118 97.087 4.71713 97.0041 4.98872C96.0832 8.01217 95.1533 11.033 94.2235 14.0537L93.6567 15.8954C93.638 15.9563 93.6151 16.0156 93.5922 16.0748L93.5775 16.113L93.5635 16.1502C93.4637 16.0434 93.4296 15.9447 93.3981 15.8455L92.7798 13.8666L92.7763 13.8555L92.7759 13.8542L92.7755 13.853L92.7752 13.8519L92.7748 13.8508L92.7745 13.8497C91.8453 10.8762 90.9161 7.90292 89.9938 4.92746C89.9207 4.69165 89.8106 4.62552 89.5748 4.6266C88.4582 4.63354 87.3413 4.63308 86.2246 4.63263C85.7696 4.63244 85.3147 4.63225 84.8598 4.63257C84.796 4.63257 84.7324 4.63731 84.6579 4.64287C84.6196 4.64572 84.5785 4.64878 84.5329 4.65154C84.5458 4.69772 84.5564 4.73736 84.5658 4.77264C84.5827 4.83634 84.5958 4.88582 84.6126 4.93397L85.9859 8.95094L85.9866 8.9532L85.9874 8.95546L85.9882 8.95772L85.989 8.95998L85.9898 8.96224L85.9905 8.9645C87.8202 14.3161 89.6498 19.6678 91.4753 25.0208C91.542 25.2154 91.6331 25.2865 91.8396 25.2848C92.9146 25.2756 93.9901 25.2702 95.0645 25.2875C95.3567 25.2924 95.4824 25.2024 95.5784 24.9211C97.4399 19.4746 99.3096 14.0307 101.179 8.58701L102.219 5.5579C102.29 5.35234 102.359 5.14621 102.433 4.92516ZM84.3773 4.65547C84.3692 4.6855 84.3619 4.71401 84.355 4.74142C84.3411 4.79616 84.3283 4.84649 84.3117 4.89562L82.9329 8.91453L82.9254 8.93618C81.0855 14.2987 79.2455 19.6615 77.4094 25.0253C77.3422 25.2221 77.243 25.2861 77.0391 25.2844C75.9284 25.2763 74.8171 25.2758 73.7064 25.285C73.4966 25.2866 73.4077 25.2075 73.3427 25.0161C71.5501 19.7573 69.7543 14.4995 67.9585 9.24186L67.955 9.23184L67.9511 9.22042L66.4853 4.92868C66.4662 4.87313 66.4507 4.81685 66.4316 4.74755C66.422 4.71272 66.4115 4.6746 66.3991 4.63162H66.7222C67.1274 4.63162 67.5326 4.63213 67.9377 4.63264C69.0952 4.6341 70.2525 4.63556 71.4101 4.62512C71.6861 4.62241 71.7994 4.71131 71.8801 4.97151C72.7985 7.9343 73.7243 10.8946 74.6502 13.8547L75.286 15.888C75.3021 15.9389 75.3196 15.9896 75.3435 16.0587L75.3444 16.0613C75.3596 16.1056 75.3775 16.1576 75.3993 16.2219C75.4224 16.1638 75.4429 16.1141 75.4612 16.07L75.4619 16.0683L75.4626 16.0668L75.463 16.0657C75.4973 15.983 75.5237 15.9193 75.5441 15.8538C76.3041 13.3819 77.063 10.9095 77.8219 8.43704L78.1211 7.46226C78.3837 6.60688 78.6463 5.75167 78.9072 4.89562C78.9543 4.74058 79.0004 4.62674 79.2085 4.62729C80.4032 4.63352 81.5978 4.63331 82.7924 4.63311C83.2598 4.63302 83.7272 4.63294 84.1946 4.63325C84.2285 4.63325 84.2626 4.63852 84.3037 4.6449C84.3259 4.64832 84.35 4.65206 84.3773 4.65547ZM109.651 25.2872C109.932 25.2893 109.995 25.2004 109.994 24.9321C109.987 20.5483 109.986 16.1645 109.985 11.7808V11.7668L109.985 9.5657C109.984 9.50625 109.984 9.44681 109.985 9.37866V9.37535L109.985 9.2502C109.947 9.26712 109.915 9.28063 109.888 9.29238C109.838 9.31375 109.801 9.32927 109.767 9.34886C109.278 9.63072 108.788 9.91292 108.299 10.1951L108.295 10.1974C107.183 10.8388 106.071 11.4801 104.956 12.1173C104.813 12.1997 104.789 12.2989 104.789 12.4463C104.792 16.0903 104.791 19.7338 104.791 23.3776V23.3778V23.3779V23.3781V23.3783L104.79 24.9402V25.2807H105.098C105.485 25.2807 105.872 25.2802 106.259 25.2798C107.39 25.2784 108.521 25.2771 109.651 25.2872ZM109.924 3.13881L109.963 3.11614L108.137 2.06341L108.129 2.05891L108.128 2.05783L104.747 0.0223083V6.09363L110.059 9.1293V3.2206L109.924 3.13881Z"
            fill="white"
          />
        </svg>
        <h1>{isLogin ? "Sign In" : "Sign Up"}</h1>
      </header>
      {isLogin ? (
        <LoginForm setForm={setForm} />
      ) : (
        <RegisterForm setForm={setForm} />
      )}
    </main>
  );
}
