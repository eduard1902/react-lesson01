'use strict';

const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'],
	nameCourse = 'Базовый React',
	command = [];
	
employers.forEach((item) => {
	if (item.length > 0 && item.trim() != '') {
		command.push(item);
	}
});


command.forEach((item, i, command) => {
	command[i] = command[i].toLowerCase().trim();
	command[i] = command[i][0].toUpperCase() + command[i].slice(1)
});


// for (let i = 0; i < command.length; i++) {
// 	command[i] = command[i].toLowerCase().trim();
// 	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
// }



const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};
const { cash, react, add } = data;
const calcCash = (...args) => {
	let total = 0;
	args.forEach(item => total += +item);
	return total;
};


 const lesson = calcCash(...cash);


const makeBusiness = (director, teacher = 'Максим', allModule, gang, course) => {
	const sumTech = [...react, ...add, 'и другие'];
	console.log(`Стартуем новый курс: ${course}. Владелец:  ${director}, преподаватель:  ${teacher}. Всего уроков:  ${allModule}. 
	Команда Академии: ${gang}
	Первое что изучим будет  ${react[0]}. Он очень похож на HTML!
	Технологии которые мы изучим:
	${sumTech.join(' ')}
	`);
};

makeBusiness(...['Артем', , lesson, command, nameCourse]);
