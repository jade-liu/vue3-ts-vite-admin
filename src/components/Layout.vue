<template>
    <a-layout class="layout-custom-trigger" :style="{height: '100vh', overflow: 'auto'}">
        <a-layout-header class="header-custom-trigger" :style="{background: '#fff', padding: '0px', lineHeight: '50px', height: '50px'}">
            <div class="logo" :style="{width: '300px', height: '50px', paddingLeft: '5px'}">
                <img src="../assets/logo.png" :style="{height: '32px', width: '32px'}" />&nbsp;
                <span :style="{fontSize: '16px', fontWeight: 'bold'}">Vue3-Vite-TS-练习</span>
            </div>
        </a-layout-header>
        <a-layout>
            <a-layout-sider v-model:collapsed="collapsed">
                <div :style="{textAlign: collapsed ? 'center' : 'left', height: '40px', lineHeight: '40px', padding: '0 16px', borderBottom: '1px solid rgb(83, 88, 94, 0.6)'}">
                    <menu-unfold-outlined v-if="collapsed" @click="() => collapsed = !collapsed" :style="{color: 'rgba(255, 255, 255, 0.65)'}" />
                    <menu-fold-outlined v-else @click="() => collapsed = !collapsed" :style="{color: 'rgba(255, 255, 255, 0.65)'}" />
                </div>
                <a-menu model="inline" theme="dark">
                    <a-menu-item key="1">
                        <user-outlined />
                        <span>创建模板</span>
                    </a-menu-item>
                </a-menu>
            </a-layout-sider>
            <a-layout-content :style="{padding: '20px 16px', height: contentHeight, overflow: 'auto'}">
                <div :style="{padding: '20px', background: '#fff'}">
                    <TemplateCustomization />
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { ref, computed } from "vue"
import TemplateCustomization from './TemplateCustomization.vue';
const collapsed = ref(true)
const contentHeight = computed(() => `${document.body.clientHeight - 52}px`)
</script>