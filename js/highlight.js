AOS.init();

//  Highlight cards

const highlightcards = document.querySelector(".highlight .row");
const exp = [{
	cardIcon: "bx bxs-graduation",
	title: "教育背景",
	desp: "本科英语专业，后在澳洲攻读计算机技术硕士，求学期间所修一半课程的成绩位居学科前1％，并以第一名的成绩顺利通过了硕士论文答辩，最终成绩满足本校PhD申请条件。具备无障碍阅读英文技术资料的能力，经常浏览GitHub、Stack Overflow等国外技术交流网站。",
}, {
	cardIcon: "bx bx-code-alt",
	title: "专业能力",
	desp: "	7年+前端开发工作经验积累了丰富的web传统开发和前后端分离项目经验，能够针对不同项目需求进行前端技术选型,并独立完成前端框架搭建以及PC端、H5、小程序、移动端APP等跨平台项目开发。对前端技术有着浓厚的兴趣，能够不断学习新技术并运用到工作中去。",
}, {
	cardIcon: "bx bx-globe",
	title: "跨文化交际",
	desp: "因为在多元文化的澳洲生活、学习、工作多年，锻炼了优秀的英文听说读写和跨文化交际能力，能够无障碍地理解另一种文化及当地风土人情，可以很好的用英语与不同文化背景的人沟通交流协作。雅思（IELTS）：7.5/9；托业（TOEIC）：919/990。",
}, ];

const showCards = () => {
	let output = "";
	exp.forEach(
		({
			cardIcon,
			title,
			desp
		}) =>
		(output += `
		<div class="col-md-8 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
   						<div class="icon-box">
   							<div class="icon"><i class='${cardIcon}'></i></div>
   							<h4 class="title"><a href="">${title}</a></h4>
   							<p class="description">
   								${desp}</p>
   						</div>
   					</div>
      `)
	);
	highlightcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
