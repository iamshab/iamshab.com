---
title: "آموزش نصب مجموعه LAMP در CentOS 7"
description: "LAMP مجموعه‌ای از نرم‌افزارهای منبع باز هست که در کنار هم نصب می‌شن تا سرور قادر باشه وب‌سایت‌ها و وب‌اپلیکیشن‌ها رو میزبانی کنه و در واقع به عنوان یک وب‌سرو…"
date: "2019-12-05T16:27:08Z"
tags: ["LAMP", "CentOS", "Apache", "MySQL", "MariaDB", "لمپ سرور", "web server", "linux"]
category: "tech"
originalCategory: "لینوکس"
author: "Shahab Aghaei"
draft: false
---

<!-- wp:paragraph -->
<p><a href="https://fa.wikipedia.org/wiki/%D9%84%D9%85%D9%BE">LAMP</a> مجموعه‌ای از نرم‌افزارهای منبع باز هست که در کنار هم نصب می‌شن تا سرور قادر باشه وب‌سایت‌ها و وب‌اپلیکیشن‌ها رو میزبانی کنه و در واقع به عنوان یک وب‌سرور ایفای نقش کنه. این عبارت مخفف کلمات <strong>L</strong>inux به عنوان سیستم‌عامل، <strong><a href="https://fa.wikipedia.org/wiki/%D9%88%D8%A8%E2%80%8C%D8%B3%D8%B1%D9%88%D8%B1_%D8%A2%D9%BE%D8%A7%DA%86%DB%8C">A</a></strong><a href="https://fa.wikipedia.org/wiki/%D9%88%D8%A8%E2%80%8C%D8%B3%D8%B1%D9%88%D8%B1_%D8%A2%D9%BE%D8%A7%DA%86%DB%8C">pache</a> به عنوان وب سرور، <strong><a href="https://fa.wikipedia.org/wiki/%D9%85%D8%A7%D8%B1%DB%8C%D8%A7%D8%AF%DB%8C%E2%80%8C%D8%A8%DB%8C">M</a></strong><a href="https://fa.wikipedia.org/wiki/%D9%85%D8%A7%D8%B1%DB%8C%D8%A7%D8%AF%DB%8C%E2%80%8C%D8%A8%DB%8C">ySQL</a> به عنوان پایگاه داده (در واقع MariaDB) و <strong><a href="https://fa.wikipedia.org/wiki/%D9%BE%DB%8C%E2%80%8C%D8%A7%DA%86%E2%80%8C%D9%BE%DB%8C">P</a></strong><a href="https://fa.wikipedia.org/wiki/%D9%BE%DB%8C%E2%80%8C%D8%A7%DA%86%E2%80%8C%D9%BE%DB%8C">HP</a> به عنوان موتور پردازش محتوای داینامیک است. خبر خوب اینه که برای آموزش نصب LAMP سرور در CentOS راه سختی پیش رو ندارین.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":57,"align":"center","width":400,"height":216} -->
<div class="wp-block-image"><figure class="aligncenter is-resized"><img src="/wp-content/uploads/2019/12/lamp.jpeg" alt="LAMP مخففی هست از Linux و Apache و MySQL و PHP" class="wp-image-57" width="400" height="216"/><figcaption>LAMP مخففی هست از Linux و Apache و MySQL و PHP</figcaption></figure></div>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>در این آموزش نصب و راه‌اندازی یک سرور با مجموعه LAMP در بستر توزیع CentOS 7 آموزش داده می‌شه. لازم به ذکر هست این آموزش در واقع ترجمه‌ای آزاد هست از<a href="https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-centos-7"> این آموزش</a> دیجیتال اوشن که به جزئیات بیش‌تری پرداخته و اگر به انگلیسی مسلط هستید می‌تونید مستقیما به اون مراجعه کنید.</p>
<!-- /wp:paragraph -->

<!-- wp:more -->
<!--more-->
<!-- /wp:more -->

<!-- wp:heading -->
<h2>گام اول - نصب Apache</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>در حال حاضر وب سرور Apache (آپاچی) محبوب‌ترین وب‌سرور در سرتاسر جهان هست و به همین خاطر می‌تونه انتخاب مناسبی برای میزبانی وب‌سایت باشه.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>ما می‌تونیم نصب Apache رو به راحتی با استفاده از مدیر بسته و مخازن پیش‌فرض CetOS یعنی yum انجام بدیم. برای این کار لازم هست تا دستورات زیر رو در خط فرمان وارد کنید:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo yum install httpd</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>بعد از این که فرآیند نصب کامل شد می‌تونید Apache رو روی سرور استارت کنید:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo systemctl start httpd.service</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>تا این‌جای کار می‌تونید برا کنترل این که همه چیز درست انجام شده و کارا طبق برنامه پیش می‌ره IP پابلیک سرورتون رو به صورت زیر توی مرورگر وارد کنید:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>http://server_ip_address/</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>اگر همه چیز درست پیش رفته باشه صفحه پیش فرض Apache رو می‌بینید که یک سری اطلاعات با هدف تست توش هست و قیافه‌ای مثل شکل زیر داره:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":63} -->
<figure class="wp-block-image"><img src="/wp-content/uploads/2019/12/default_apache.png" alt="صفحه پیش‌فرض Apache" class="wp-image-63"/><figcaption>صفحه پیش‌فرض Apache</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>اگر این صفحه رو می‌بینید وب سرور شما به درستی نصب شده و آخرین کاری که لازمه انجام بدید اینه که سرویس Apache رو enable کنید تا با هر بار بوت شدن سرور به صورت خودکار لود بشه. برای این کار لازمه دستور زیر رو وارد کنید:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo systemctl enable httpd.service</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>گام دوم - نصب MySQL(MariaDB)</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>در این مرحله هم می‌تونیم با استفاده از yum بسته‌های مورد نیاز رو نصب کنیم. توی این مرحله یک سری بسته‌های جانبی که به مدیریت به‌تر کمک می‌کنه هم نصب می‌شه:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo yum install mariadb-server mariadb</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>وقتی نصب کامل شد باید سرویس MariaDB رو استارت کنیم.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo systemctl start maridb</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>حالا پایگاه داده MariaDB در حال اجرا هست اما برای امینان از امنیت کامل و حذف یک سری تنظیمات پیش‌فرض که باعث دست‌رسی ناایمن به سرور هست لازمه تا یک اسکریپت ساده رو با استفاده از دستور زیر اجرا کنیم:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo mysql_secure_installation</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>تو این مرحله پسورد یوزر روت رو وارد کنید که با توجه به این که شما برای اولین بار MariaDB رو نصب کردید پسوردی نداره پس بذارید خالی بمونه و اینتر بزنید. تو مرحله بعد از شما می‌خاد که یک پسورد برای root تنظیم بشه Y رو بزنید و پسورد رو وارد کنید. </p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>Enter current password for root (enter for none):
OK, successfully used password, moving on...

Setting the root password ensures that nobody can log into the MariaDB
root user without the proper authorization.

New password: [REDACTED]
Re-enter new password: [REDACTED]
Password updated successfully!
Reloading privilege tables..
 ... Success!</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>برای سوالات بعدی که ازتون پرسیده می‌شه Enter رو بزنید تا جواب‌های پیش‌فرض رو تایید کنید. با این کار در واقع مراحل حذف یک سری دیتابیس‌های نمونه، یوزرهای پیش‌فرض و لاگین با استفاده از روت رو حذف می‌کنید.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>آخرین کاری که باید انجام بدید enable کردن سرویس MariaDB هست تا با هر بار بوت سرور به صورت خودکار لود بشه:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo systemctl enable mariadb.service</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>گام سوم - نصب PHP</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>PHP در واقع کارش اجرای کدها و نمایش محتوای داینامیک هست و می‌تونه اسکریپت‌ها رو اجرا کنه، اطلاعات رو از MySQL بگیره و کارای لازم برای وب سرور رو پیس ببره.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>در این مرحله مجددن از yum برای نصب بسته‌های مورد نیاز استفاده می‌کنیم:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo yum install php php-mysql</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>بعد از تموم شدن فرآیند نصب برای این‌که ارتباط Apache که توی گام اول نصبش کرده بودیم با PHP برقرار بشه لازم هست که یک بار سرویسش رو ری‌استارت کنید:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo systemctl restart httpd.service</code></pre>
<!-- /wp:code -->

<!-- wp:heading {"level":3} -->
<h3>نصب ماژول‌های PHP</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>گاهی اوقات برای بهبود عمل‌کرد PHP و یا استفاده از یک سری ویژگی‌های خاص می‌تونیم یک سری بسته‌های آپشنال و اختیاری رو هم در کنارش نصب کنیم. برای این که بتونید لیستی از این بسته‌ها ببینید می‌تونید دستور زیر رو وارد کنید و در صورت لزوم هر بسته‌ای که مایل بودید رو با استفاده از yum نصب کنید.</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>yum search php-</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>گام چهارم - تست کارکرد PHP روی وب سرور</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>برای تست کارکرد صحیح PHP و اطمینان از تنظیمات اون می‌تونیم یک اسکریپت بسیار ساده PHP رو در قالب یک فایل با نام info.php استفاده می‌کنیم که برای این‌که Apache قادر به لود کردن اون باشه باید در مسیر خاصی که در واقع پیش‌فرض Apache هست و اصطلاحن web root نامیده می‌شه قرارش بدیم.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>توی CentOS 7  این پوشه در مسیر زیر هست:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>/var/www/html/</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>برای ایجاد فایل مورد نیازمون دستور زیر رو وارد می‌کنیم:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo vi /var/www/html/info.php</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>توی فایلی که باز می‌شه متن زیر رو که یک کد PHP هست وارد می‌کنیم:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;?php phpinfo(); ?></code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>بعدش اگر از ویرایش‌گر vi برای وارد کردن کدها استفاده کردید می‌تونید با زدن کلید Esc و : و wq به ترتیب، از فایل خارج شده و اون رو ذخیره کنین.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>دقت داشته باشین که اگر از فایروال استفاده می‌کنین باید با استفاده از دستورات زیر به ترافیک پروتکل‌های HTTP و HTTPS اجازه عبور بدین:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>حالا کافیه با داشتن آدرس IP پابلیک وب سرورتون مسیر زیر رو توی مروگر وارد کنید:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>http://your_server_IP_address/info.php</code></pre>
<!-- /wp:code -->

<!-- wp:paragraph -->
<p>صفحه‌ای که براتون لود می‌شه باید هم‌چین قیافه‌ای داشته باشه:</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":71} -->
<figure class="wp-block-image"><img src="/wp-content/uploads/2019/12/default_php.png" alt="صفحه پیش فرض info.php" class="wp-image-71"/><figcaption>صفحه پیش فرض info.php</figcaption></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>این صفحه یک سری اطلاعات اولیه راجع به سرور و PHP نصب شده روی اون نمایش می‌ده که عموما برای دیباگ کردن و اطمینان از تنظیماتی که انجام دادین استفاده می‌شه.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>اگر همه چیز اوکی بود بود بهتره برگردید و فایلی که ایجاد کردین رو پاک کنید و در صورتی که در آینده به‌ش نیاز داشتین مجددن ایجادش کنین. چرا که این فایل اطلاعاتی از وب سرور شما می‌ده که دونستنش برای افراد ناشناس می‌تونه خطرناک باشه.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>برای پاک کردن فایل می‌تونید از دستور زیر استفاده کنید:</p>
<!-- /wp:paragraph -->

<!-- wp:code -->
<pre class="wp-block-code"><code>sudo rm /var/www/html/info.php</code></pre>
<!-- /wp:code -->

<!-- wp:heading -->
<h2>جمع‌بندی</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>تبریک می‌گم! شما مجموعه LAMP رو با موفقیت نصب کردین و الان بستر لازم برای اجرای بیش‌تر وب‌سایت‌ها و وب‌اپلیکیشن‌ها رو دارین.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>سعی می‌کنم در آینده توی آموزش‌های جداگونه مباحثی مثل تنظیمات جزئی‌تر و کاربردی Apache مثل Virtual host ، نصب CMS های معروف مثل Wordpress و ... هم اضافه کنم.</p>
<!-- /wp:paragraph -->
