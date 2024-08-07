export const employeeList = [
  {
    id: '1',
    name: '강호연',
    email: 'kimpra2989@revive.com',
    position1: 'Programmer',
    position2: 'Developer',
    isOnline: true,
    date: '24/05/20',
    profile: '/src/assets/employees/employee1.svg',
  },
  {
    id: '2',
    name: '김수민',
    email: 'ssuminii@revive.com',
    position1: 'Programmer',
    position2: 'Developer',
    isOnline: false,
    date: '24/05/20',
    profile: '/src/assets/employees/employee2.svg',
  },
  {
    id: '3',
    name: '이동혁',
    email: 'ldh921126@revive.com',
    position1: 'Programmer',
    position2: 'Developer',
    isOnline: false,
    date: '24/05/20',
    profile: '/src/assets/employees/employee3.svg',
  },
  {
    id: '4',
    name: '이윤환',
    email: 'chzhqly@revive.com',
    position1: 'Programmer',
    position2: 'Developer',
    isOnline: true,
    date: '24/05/20',
    profile: '/src/assets/employees/employee4.svg',
  },
  {
    id: '5',
    name: '최원지',
    email: 'wonjichoe@revive.com',
    position1: 'Programmer',
    position2: 'Developer',
    isOnline: true,
    date: '24/05/20',
    profile: '/src/assets/employees/employee5.svg',
  },
]

// 2024년 윤년임
export const commutes = Array.from({ length: 366 }, (_, i) => i + 1).map((x) => ({
  date: new Date(2024, 0, x),
  start: new Date(2024, 0, x, 9),
  end: new Date(2024, 0, x, 18),
}))
