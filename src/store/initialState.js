const LOAN = 'LOAN';
const DEBT = 'DEBT';
const EXPENSE = 'EXPENSE';
const INCOME = 'INCOME';

const initialState = {
  categories: {
    [EXPENSE]: [LOAN, 'transportation'],
    [INCOME]: [DEBT, 'salary'],
    items: {
      [LOAN]: { picture: 'A.png', name: 'Loan', id: LOAN },
      [DEBT]: { picture: 'B.png', name: 'Income', id: DEBT },
      transportation: { picture: 'C.png', name: 'Transportation', id: 'transportation' },
      salary: { picture: 'D.png', name: 'Salary', id: 'salary' },
    }
  },
  wallets: {
    order: ['dbbl', 'cash'],
    items: {
      dbbl: { name: 'DBBL', description: '', openingBalance: 0 },
      cash: { name: 'CASH', description: '', openingBalance: 0 },
    }
  },
  transactions: {

  },
  events: {
    active: 'tour2017',
    items: {
      'tour2017': { name: 'Tour 2017', startDate: '1st January', endDate: '31st December' }
    }
  }
};

export default initialState;
