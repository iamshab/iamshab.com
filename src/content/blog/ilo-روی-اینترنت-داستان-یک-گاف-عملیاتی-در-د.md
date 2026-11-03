---
title: "iLO روی اینترنت! داستان یک گاف عملیاتی در دیتاسنترِ محبوبِ این روزها"
description: "چند روز پیش روی یک سرور اجاره‌ای -از یک دیتاسنتر معروف و محبوب داخلی،- نیاز فوری به کنسول داشتم. پنل KVM دیتاسنتر مثل دفعه قبل که چندماه پیش نیاز شده بود، کا…"
date: "2025-11-23T14:18:03Z"
tags: ["iLO", "دیتاسنتر", "امنیت iLO"]
category: "tech"
originalCategory: "فناوری"
author: "Shahab Aghaei"
draft: false
---

<!-- wp:paragraph -->
<p>چند روز پیش روی یک سرور اجاره‌ای -از یک دیتاسنتر معروف و محبوب داخلی،- نیاز فوری به کنسول داشتم. پنل KVM دیتاسنتر مثل دفعه قبل که چندماه پیش نیاز شده بود، کار نمی‌کرد. تا همین‌جا مشخص بود که مشکلات قبلی به عنوان رُخ‌داد ثبت و پی‌گیری نشده. به هر حال بعد از سر و کله با پشتیبانی و عدم توفیق در حل مشکل، در نهایت گفتند: «یک IP پابلیک بده تا iLO بدیم.» مخالفت کردم (چون iLO پابلیک، از اون موردای خط قرمز هست) اما به‌دلیل فوریت، پذیرفتم، با این قول که به محض اتمام کار کابل رو به صورت فیزیکی جدا می‌کنن.</p>
<!-- /wp:paragraph -->

<!-- wp:more -->
<!--more-->
<!-- /wp:more -->

<!-- wp:paragraph -->
<p>اما اتفاقی که بعدش افتاد نگران‌کننده‌تر بود: دسترسی iLO به&nbsp;سرور یک مشتری دیگه&nbsp;داده شده بود! سریع با پشتیبانی تماس گرفتم، اطلاع دادم و اون‌ها قول بررسی دادند، اما ساعت‌ها گذشت و هنوز دسترسی پابرجا بود.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>این تجربه صرفن یک خطای فردی یا «سوتی پشتیبانی» نبود. چنین رخ‌دادی ریشه در معماری، فرآیند و فرهنگ عملیاتی در سازمان‌های ما داره. سال‌هاست جسته‌وگریخته می‌شنویم شروع خیلی از رخنه‌های بزرگ داخل ایران از&nbsp;iLOهای پابلیک&nbsp; بوده؛ ترکیبی از پیکربندی غلط، پسوردهای ضعیف یا پیش‌فرض و آسیب‌پذیری‌های شناخته‌شده. وقتی iLO روی اینترنت باز باشه، مهاجم&nbsp;در لایه‌ی زیرین سیستم‌عامل&nbsp;کنترل می‌گیره: برق، بوت، کنسول، Virtual Media.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading"> چرا این سناریو خطرناکه؟</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>iLO روی اینترنت = مهاجم مستقیمن در&nbsp;<strong>Control Plane</strong>&nbsp;سخت‌افزار.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>نفوذی فراتر از OS؛ حتی با Reinstall هم نفوذ باقی می‌مونه.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>سال‌هاست PoCهای متعددی برای Exploit روی iLO/iDRAC/IPMI در اینترنت وجود داره.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>بیشتر رخنه‌های دیتاسنتری که شنیدیم از همین مسیر شروع شده‌اند: iLOهای پابلیک + پسوردهای ضعیف + Firmware قدیمی.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">چی یاد بگیریم؟</h3>
<!-- /wp:heading -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>iLO باید همیشه در Mgmt VRF/VLAN داخلی باشد.</strong>&nbsp;هیچ استثنایی برای NAT به اینترنت وجود نداره.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>KVM Fail ≠ iLO Public.</strong>&nbsp;باید Runbook امن برای Break-Glass آماده و تست‌شده باشه.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Process Failure &gt; Tech Failure.</strong>&nbsp;وقتی Incident ثبت نشه و Controlهای ممیزی وجود نداشته باشه، دیر یا زود ضعف تبدیل به Breach می‌شه.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">چی کار کنیم؟</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p><strong>برای Provider (دیتاسنتر):</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>OOB Access فقط از طریق VPN + Bastion + MFA.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Session Expiry و قطع خودکار دسترسی.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Identity Verification قبل از هر دسترسی.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Crash-Cart / KVM over VPN به‌عنوان Failover رسمی.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Audit &amp; Logging اجباری برای تمام Sessionها.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>برای Tenant (مشتری):</strong></p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>External Scan دوره‌ای روی IP Range.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Credential Hygiene: بدون پیش‌فرض، Rotation منظم.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Firmware Currency: هیچ iLO قدیمی نباشه.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Runbook تست‌شده برای دسترسی کنسول در شرایط Fail.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li>Log Forwarding از iLO به SIEM.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:separator -->
<hr class="wp-block-separator has-alpha-channel-opacity"/>
<!-- /wp:separator -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">جمع‌بندی</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>iLO روی اینترنت یک&nbsp;<strong><mark style="background-color:rgba(0, 0, 0, 0)" class="has-inline-color has-medium-pink-color">خط قرمز</mark></strong>&nbsp;است؛ نه یک راه‌حل موقت.<br>این Incident نشون داد مشکل اصلی «خرابی KVM» نبود؛ مشکل، نبود فرآیند و Runbook امن بود.<br>زیرساختی که Failover امن نداره، دیر یا زود به انتخاب‌های خطرناک مثل iLO Public کشیده می‌شه.</p>
<!-- /wp:paragraph -->
