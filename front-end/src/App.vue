<template>
  <div class="min-h-screen bg-gradient-to-br from-base-200 to-base-300">
    <div class="container mx-auto px-4 py-8 max-w-2xl">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold bg-gradient-to-r from-success to-primary bg-clip-text text-transparent mb-2">
          LIFF Application
        </h1>
        <div class="badge badge-success badge-lg">LINE Front-end Framework</div>
      </div>

      <!-- Status Alert -->
      <div v-if="message" class="alert mb-6" :class="error ? 'alert-error' : 'alert-success'">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path v-if="!error" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <div class="font-bold">{{ message }}</div>
          <div v-if="error" class="text-sm">{{ error }}</div>
        </div>
      </div>

      <!-- Profile Card -->
      <div v-if="isLoggedIn && profile" class="card bg-base-100 shadow-xl mb-6">
        <div class="card-body">
          <div class="flex items-center gap-4">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                <img v-if="profile.pictureUrl" :src="profile.pictureUrl" alt="Profile" />
                <div v-else
                  class="w-full h-full bg-gradient-to-br from-success to-primary flex items-center justify-center text-3xl font-bold text-white">
                  {{ profile.displayName?.charAt(0) }}
                </div>
              </div>
            </div>
            <div class="flex-1">
              <h2 class="card-title text-2xl">{{ profile.displayName }}</h2>
              <p class="text-base-content/70 text-sm">{{ profile.statusMessage || 'ไม่มีข้อความสถานะ' }}</p>
              <div class="badge badge-ghost badge-sm mt-2">{{ profile.userId }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div v-if="isLoggedIn" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <button @click="sendMessage" class="btn btn-success btn-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          ส่งข้อความ
        </button>

        <button @click="shareTargetPicker" class="btn btn-primary btn-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          แชร์
        </button>

        <button @click="openWindow" class="btn btn-info btn-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          เปิดลิงก์ภายนอก
        </button>

        <button @click="closeWindow" class="btn btn-error btn-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          ปิดหน้าต่าง
        </button>
      </div>

      <!-- Login Button -->
      <div v-else-if="!error" class="flex justify-center mb-6">
        <button @click="login" class="btn btn-success btn-wide btn-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          เข้าสู่ระบบด้วย LINE
        </button>
      </div>

      <!-- Logout Button -->
      <div v-if="isLoggedIn" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <button @click="logout" class="btn btn-warning btn-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          ออกจากระบบ
        </button>
      </div>

      <!-- LIFF Info Stats -->
      <div v-if="isLoggedIn" class="stats stats-vertical lg:stats-horizontal shadow w-full mb-6">
        <div class="stat">
          <div class="stat-figure text-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="stat-title">View Type</div>
          <div class="stat-value text-success text-2xl">{{ liffContext.viewType || 'N/A' }}</div>
          <div class="stat-desc">{{ liffContext.type }}</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <div class="stat-title">Language</div>
          <div class="stat-value text-primary text-2xl">{{ liffLanguage }}</div>
          <div class="stat-desc">Version {{ liffVersion }}</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-info">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="stat-title">In LINE Client</div>
          <div class="stat-value text-info text-2xl">{{ liffContext.isInClient ? 'Yes' : 'No' }}</div>
          <div class="stat-desc">{{ liffContext.isInClient ? 'ใน LINE App' : 'ใน Browser' }}</div>
        </div>
      </div>

      <!-- Documentation Link -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body text-center">
          <h3 class="card-title justify-center">ต้องการความช่วยเหลือ?</h3>
          <p class="text-base-content/70">อ่านเอกสารเพิ่มเติมเกี่ยวกับ LIFF</p>
          <div class="card-actions justify-center">
            <a href="https://developers.line.biz/en/docs/liff/" target="_blank" rel="noreferrer"
              class="btn btn-outline btn-success">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              เอกสาร LIFF
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import liff from '@line/liff';

interface Profile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
}

interface LiffContext {
  type: string;
  viewType: string;
  isInClient: boolean;
}

const message = ref('กำลังเริ่มต้น LIFF...');
const error = ref('');
const isLoggedIn = ref(false);
const profile = ref<Profile | null>(null);
const liffContext = ref<LiffContext>({
  type: '',
  viewType: '',
  isInClient: false
});
const liffLanguage = ref('');
const liffVersion = ref('');
const API_BASE = import.meta.env.VITE_BASE_URL || "https://abc123.ngrok.io";

const initializeLiff = async () => {

  const idToken = await liff.getIDToken();
  
  try {
    await liff.init({
      liffId: import.meta.env.VITE_LIFF_ID
    });

    message.value = 'เริ่มต้น LIFF สำเร็จ';
    liffVersion.value = liff.getVersion();
    liffLanguage.value = liff.getLanguage();

    if (liff.isLoggedIn()) {
      isLoggedIn.value = true;

      let res;
      try {
        res = await axios.post(`${API_BASE}/api/v1/auth/verify`, {
          idToken: idToken
        },{
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        console.log('การยืนยันตัวตนสำเร็จ:', res.data);
        if (res.data && res.data.token) {
          localStorage.setItem('token', res.data.token);
        }
      } catch (err) {
        console.error('การยืนยันตัวตนล้มเหลว:', err);
      }

      await getUserProfile();
      getLiffContext();
      error.value = '';
    } else {
      message.value = 'กรุณาเข้าสู่ระบบเพื่อใช้งาน';
    }
  } catch (e: any) {
    message.value = 'เริ่มต้น LIFF ล้มเหลว';
    error.value = `${e}`;
  }
};

const getUserProfile = async () => {
  try {
    profile.value = await liff.getProfile();
  } catch (e: any) {
    console.error('ไม่สามารถดึงข้อมูลโปรไฟล์', e);
  }
};

const getLiffContext = () => {
  const context = liff.getContext();
  if (context) {
    liffContext.value = {
      type: context.type,
      viewType: context.viewType ?? '',
      isInClient: liff.isInClient()
    };
  }
};

const login = () => {
  liff.login();
};

const logout = () => {
  if (liff.isLoggedIn()) {
    liff.logout();
    window.location.reload();
  }
};

const sendMessage = async () => {
  if (!liff.isInClient()) {
    alert('ฟีเจอร์นี้ใช้ได้เฉพาะใน LINE App เท่านั้น');
    return;
  }

  try {
    await liff.sendMessages([
      {
        type: 'text',
        text: 'สวัสดีจาก LIFF App! 👋'
      }
    ]);
    message.value = 'ส่งข้อความสำเร็จ!';
    error.value = '';
  } catch (e: any) {
    message.value = 'ส่งข้อความล้มเหลว';
    error.value = `${e}`;
  }
};

const shareTargetPicker = async () => {
  if (!liff.isApiAvailable('shareTargetPicker')) {
    alert('Share Target Picker ใช้งานไม่ได้ในสภาพแวดล้อมนี้');
    return;
  }

  try {
    await liff.shareTargetPicker([
      {
        type: 'text',
        text: 'แชร์จาก LIFF App ของฉัน! 🚀'
      }
    ]);
    message.value = 'แชร์สำเร็จ!';
    error.value = '';
  } catch (e: any) {
    if (e.toString() !== 'Error: [LIFF] Execution error shareTargetPicker was canceled by user') {
      message.value = 'แชร์ล้มเหลว';
      error.value = `${e}`;
    }
  }
};

const openWindow = () => {
  liff.openWindow({
    url: 'https://line.me',
    external: true
  });
};

const closeWindow = () => {
  liff.closeWindow();
};

onMounted(() => {
  initializeLiff();
});
</script>

<style scoped>
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}
</style>