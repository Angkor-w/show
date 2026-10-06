// 提示词：
// 任务：生成JS模板字符串内使用的HTML正文片段。
// 约束：
// 1. 只输出HTML，不要content=、不要JS代码、不要```标记；
// 2. 禁止内容里出现反引号`；
// 3. 超链接<a>必须加 target="_blank"；
// 4. img标签写上alt描述，使用picsum图片链接；
// 5. 支持段落、二级标题、三级标题、有序列表、无序列表、引用块、粗体、斜体、行内代码；
// 6. 排版段落间距符合网页阅读习惯。
// 文章主题：【文章主题】
const articles = [
{
title:"使用说明",
date:"2026-10-1",
desc:"如何使用本站",
content:`
<h2>个人资源分享网站使用说明</h2>
<p>欢迎访问本站！这是一个部署在 <strong>GitHub Pages</strong> 上的个人资源分享站点，用于整理和分享我收集的各类学习资料、工具与素材。为了让你更快上手，请花几分钟阅读以下说明。</p>

<h3>一、网站能做什么</h3>
<p>本站主要提供以下类型的内容：</p>
<ul>
  <li>学习笔记与教程文档</li>
  <li>常用软件与开发工具安装包</li>
  <li>设计素材、图标与字体资源</li>
  <li>开源项目推荐与配置文件模板</li>
</ul>
<p>所有资源均以静态文件形式托管，访问速度快，且无需注册登录。</p>

<h3>二、如何浏览与下载</h3>
<ol>
  <li>选择你感兴趣的<strong>内容</strong>。</li>
  <li>点击资源标题，进入详情页查看说明。</li>
  <li>点击页面中的<strong>下载按钮</strong>或文件链接即可获取资源（部分没有）。</li>
  <li>若文件较大，建议使用下载工具，并注意核对文件<em>校验值</em>。</li>
</ol>


<h3>三、常见问题</h3>
<p><strong>1. 下载链接失效怎么办？</strong><br>由于 GitHub Pages 的静态特性，部分外链可能因源站调整而失效。你可以通过<a href="https://github.com" target="_blank">GitHub 仓库</a>提交 Issue，我会尽快修复。</p>
<p><strong>2. 资源可以商用吗？</strong><br>除非特别注明，本站分享的资源仅供个人学习与研究使用。商用请自行联系原作者获取授权。</p>
<p><strong>3. 如何反馈问题或建议？</strong><br>欢迎在仓库中提交 Issue，或发送邮件至示例邮箱。你的反馈会让本站变得更好。</p>

<h3>四、免责声明</h3>
<p>本站所有资源均来自互联网公开渠道或本人原创整理，仅供学习交流，请于下载后 <strong>24 小时内</strong> 删除。若无意侵犯了你的权益，请及时联系我，我会立即处理。</p>
<p>感谢你的访问，祝你使用愉快！</p>
<img src="https://img.remit.ee/i/AdQaYVSGJyFd">
`
}
,
{
title:"友情链接",
date:"2026-09-30 上传",
desc:"常用网站链接",
content:`
<h2>友情链接说明</h3>

<p>以上链接均为各平台<strong>官方主站</strong>，推荐优先通过官方渠道访问，以确保账号安全与内容正版。</p>

<ul>
  <li><strong>视频与社交</strong>：哔哩哔哩、抖音提供视频内容消费与创作服务；</li>
  <li><strong>阅读与学习</strong>：番茄小说为免费网文阅读平台，多邻国提供语言学习课程；</li>
  <li><strong>开发工具</strong>：Python 为编程语言官网，Visual Studio Code 为代码编辑器官网；</li>
  <li><strong>搜索引擎与综合服务</strong>：谷歌、微软、腾讯网分别为搜索、软件生态与新闻门户的入口。</li>
</ul>

<blockquote>
  <p>建议将这些链接添加至浏览器书签，方便日常快速访问。若发现链接失效或跳转异常，请以平台 App 或官方公告为准。</p>
</blockquote>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://www.bilibili.com/favicon.ico" alt="哔哩哔哩图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">哔哩哔哩</p>
    <p style="margin:0;font-size:14px;color:#666;">国内知名的视频弹幕网站，涵盖动画、番剧、游戏、知识、生活等多元内容分区，年轻用户聚集的文化社区。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://www.bilibili.com/" target="_blank">www.bilibili.com</a></p>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://www.douyin.com/favicon.ico" alt="抖音图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">抖音</p>
    <p style="margin:0;font-size:14px;color:#666;">短视频记录与分享平台，用户可通过短视频记录生活点滴，涵盖娱乐、知识、电商、直播等多种场景。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://www.douyin.com/" target="_blank">www.douyin.com</a></p>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://ts4.tc.mm.bing.net/th/id/OIP-C.y3I7LNs1Yy0rBSjNJHQo3AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="多邻国图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">多邻国</p>
    <p style="margin:0;font-size:14px;color:#666;">全球流行的语言学习平台，以游戏化方式提供英语、日语、法语、西班牙语等多语种课程，免费且科学有效。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://www.duolingo.com/" target="_blank">www.duolingo.com</a></p>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://ts4.tc.mm.bing.net/th/id/OIP-C.-ecn234u43SLC-vPZu_ofgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="番茄小说图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">番茄小说</p>
    <p style="margin:0;font-size:14px;color:#666;">字节跳动旗下的免费网文阅读平台，提供海量正版小说资源，涵盖都市高武、悬疑脑洞、豪门总裁、玄幻仙侠等热门分类。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://fanqienovel.com/" target="_blank">fanqienovel.com</a></p>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://www.python.org/static/favicon.ico" alt="Python图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">Python</p>
    <p style="margin:0;font-size:14px;color:#666;">一种易学易用的通用编程语言，广泛应用于数据科学、人工智能、Web开发、自动化脚本等领域，拥有庞大活跃的社区生态。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://www.python.org/" target="_blank">www.python.org</a></p>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://code.visualstudio.com/favicon.ico" alt="Visual Studio Code图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">Visual Studio Code</p>
    <p style="margin:0;font-size:14px;color:#666;">微软出品的免费开源代码编辑器，轻量但功能强大，支持 Windows、macOS 和 Linux 平台，通过丰富插件可适配几乎所有主流编程语言。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a></p>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://ts1.tc.mm.bing.net/th/id/OIP-C.8ejT325Sn_NQakb9Hv2G5QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="谷歌图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">谷歌</p>
    <p style="margin:0;font-size:14px;color:#666;">全球最大的搜索引擎公司，提供搜索、地图、邮箱、云盘、翻译、办公套件等互联网服务，同时也是 Android 系统和 Chrome 浏览器的开发者。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://www.google.com/" target="_blank">www.google.com</a></p>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://www.microsoft.com/favicon.ico" alt="微软图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">微软</p>
    <p style="margin:0;font-size:14px;color:#666;">全球领先的科技公司，旗下拥有 Windows 操作系统、Office 办公套件、Azure 云服务、Surface 硬件以及 GitHub 等核心产品与服务。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://www.microsoft.com/" target="_blank">www.microsoft.com</a></p>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://ts1.tc.mm.bing.net/th/id/OIP-C.MPL812O4BGYHlAiTyhfGHQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="腾讯网图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">腾讯网</p>
    <p style="margin:0;font-size:14px;color:#666;">腾讯公司旗下的综合门户网站，集新闻信息、互动社区、娱乐产品于一体，为全球华人用户提供实时新闻和深度资讯服务。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://www.qq.com/" target="_blank">www.qq.com</a></p>
`
}
,
{
title:"操作技巧",
date:"2026-09-30",
desc:"如何让操作更有含金量",
content:`
<h2>实用操作技巧</h2>
<h3>1.浏览器批量添加书签</h3>
<p>如果你希望把上面全部链接一次性导入浏览器书签，可以使用书签导入导出功能。</p>
<ul>
<li>Chrome / Edge：右上角三点 → 书签和清单 → 书签管理器 → 右上角三个点 → <strong>导入书签</strong></li>
<li>Firefox：书签管理 → 从HTML文件导入</li>
</ul>
<blockquote>
<p>小提示：导出的书签为HTML格式，可以备份保存到本地，重装浏览器直接恢复全部收藏网站。</p>
</blockquote>

<h3>2.快速打开链接：浏览器关键词别名</h3>
<p>Chrome/Edge支持给网站设置自定义关键字，地址栏输入简短字符即可直接跳转。</p>
<ol>
<li>打开设置 → 搜索引擎 → 管理搜索引擎和站点搜索</li>
<li>找到对应网站，点击编辑，填写“关键字”，例如给B站设置关键字 <code>b</code></li>
<li>之后地址栏输入 <code>b</code> 按下回车，直接打开哔哩哔哩主页</li>
</ol>

<h2>链接安全校验小知识</h2>
<ul>
<li><strong>认准域名</strong>：访问前检查浏览器地址栏域名，钓鱼网站经常使用近似混淆域名。</li>
<li><strong>HTTPS锁图标</strong>：地址栏出现小锁代表加密连接；没有锁尽量不要输入账号密码。</li>
<li><strong>不要点开聊天收到的短链接</strong>，不确定的链接可以使用在线网址解析工具展开真实地址。</li>
</ul>

<h2>推荐网络工具站点（补充友情链接）</h2>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://pic.mksucai.com/00/20/53/7505c45ec7640e8a.webp" alt="Can I Use图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">Can I Use</p>
    <p style="margin:0;font-size:14px;color:#666;">前端开发必备，查询CSS、JS特性在各个浏览器的兼容情况。写网页时用来判断API是否可以直接使用。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://caniuse.com/" target="_blank">caniuse.com</a></p>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://ts4.tc.mm.bing.net/th/id/OIP-C.nHjXHoFuxF2afs4lObgJ2wAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Regex101图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">Regex101</p>
    <p style="margin:0;font-size:14px;color:#666;">正则表达式在线调试工具。可以编写、测试正则，附带解释、匹配示例，写脚本处理文本非常实用。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://regex101.com/" target="_blank">regex101.com</a></p>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://pic.pngsucai.com/00/65/43/f928f04a8359c04b.webp" alt="JSONLint图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">JSONLint</p>
    <p style="margin:0;font-size:14px;color:#666;">JSON在线校验格式化工具。复制粘贴JSON，自动找出语法错误、格式化压缩JSON文本，调试接口数据必备。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://jsonlint.com/" target="_blank">jsonlint.com</a></p>

<div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
  <img src="https://convertio.co/favicon.ico" alt="Convertio图标" style="width:48px;height:48px;border-radius:8px;">
  <div>
    <p style="margin:0 0 6px 0;font-size:16px;font-weight:600;">Convertio</p>
    <p style="margin:0;font-size:14px;color:#666;">在线文件格式转换，支持图片、文档、音视频之间互相转换，无需安装本地软件。</p>
  </div>
</div>
<p style="margin:0 0 24px 64px;"><a href="https://convertio.co/" target="_blank">convertio.co</a></p>
`
}
];
