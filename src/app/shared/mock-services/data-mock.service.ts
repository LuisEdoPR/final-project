import { InMemoryDbService } from 'angular-in-memory-web-api';

export class DataMockService implements InMemoryDbService {
	createDb() {
		const employees = [
			{
				id: 1,
				name: 'Leanne Graham',
				age: 31,
				birthday: '01-01-1987',
				email: 'Sincere@april.biz',
				phone: '1-770-736-8031 x56442',
				company: 'Romaguera-Crona',
				favoriteColor: '#ff0000',
				projectId: 1
			},
			{
				id: 2,
				name: 'Ervin Howell',
				age: 28,
				birthday: '01-01-1990',
				email: 'Shanna@melissa.tv',
				phone: '010-692-6593 x09125',
				company: 'Deckow-Crist',
				favoriteColor: '#ff0000',
				projectId: 2
			},
			{
				id: 3,
				name: 'Clementine Bauch',
				age: 27,
				birthday: '01-01-1991',
				email: 'Nathan@yesenia.net',
				phone: '1-463-123-4447',
				company: 'Romaguera-Jacobson',
				favoriteColor: '#000000',
				projectId: 2
			},
			{
				id: 4,
				name: 'Patricia Lebsack',
				age: 26,
				birthday: '01-01-1992',
				email: 'Julianne.OConner@kory.org',
				phone: '493-170-9623 x156',
				company: 'Robel-Corkery',
				favoriteColor: '#ffffff',
				projectId: 3
			},
			{
				id: 5,
				name: 'Chelsey Dietrich',
				age: 31,
				birthday: '01-04-1987',
				email: 'Lucio_Hettinger@annie.ca',
				phone: '(254)954-1289',
				company: 'Keebler LLC',
				favoriteColor: '#00c900',
				projectId: 3
			},
			{
				id: 6,
				name: 'Mrs. Dennis Schulist',
				age: 30,
				birthday: '01-01-1988',
				email: 'Karley_Dach@jasper.info',
				phone: '1-477-935-8478 x6430',
				company: 'Considine-Lockman',
				favoriteColor: '#ff8300',
				projectId: 3
			},
			{
				id: 7,
				name: 'Nicholas Runolfsdottir',
				age: 36,
				birthday: '01-01-1982',
				email: 'Sherwood@rosamond.me',
				phone: '586.493.6943 x140',
				company: 'Abernathy Group',
				favoriteColor: '#7c310b',
				projectId: 4
			},
			{
				id: 8,
				name: 'Glenna Reichert',
				age: 40,
				birthday: '01-01-1978',
				email: 'Chaim_McDermott@dana.io',
				phone: '(775)976-6794 x41206',
				company: 'Yost and Sons',
				favoriteColor: '#0433ff',
				projectId: 4
			},
			{
				id: 9,
				name: 'Clementina DuBuque',
				age: 18,
				birthday: '01-01-2000',
				email: 'Rey.Padberg@karina.biz',
				phone: '024-648-3804',
				company: 'Hoeger LLC',
				favoriteColor: '#ff2f92',
				projectId: 4
			}
		];

		const projects = [
			{
				id: 1,
				name: 'Project X',
				clientName: 'Romaguera-Crona'
			},
			{
				id: 2,
				name: 'Ervin Howell',
				clientName: 'Deckow-Crist'
			},
			{
				id: 3,
				name: 'Clementine Bauch',
				clientName: 'Romaguera-Jacobson'
			},
			{
				id: 4,
				name: 'Patricia Lebsack',
				clientName: 'Robel-Corkery'
			},
			{
				id: 5,
				name: 'Chelsey Dietrich',
				clientName: 'Keebler LLC'
			},
			{
				id: 6,
				name: 'Mrs. Dennis Schulist',
				clientName: 'Considine-Lockman'
			}
		];

		return { employees, projects };
	}
}
