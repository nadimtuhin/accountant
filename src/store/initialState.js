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
      dbbl: { id: 'dbbl', name: 'DBBL', description: '', openingBalance: 0 },
      cash: { id: 'cash', name: 'CASH', description: '', openingBalance: 0 },
    }
  },
  transactions: {
    'uuid-1': { id: 'uuid-1', date: 'date', type: EXPENSE, category: 'transportation', wallet: 'cash', amount: 200, remark: 'pathao ride to office', event: 'tour2017' },
    'uuid-2': { id: 'uuid-2', date: 'date', type: INCOME, category: 'salary', wallet: 'cash', amount: 200000, remark: '', event: null },
  },
  months: {
    orders: ['month/year'],
    items: {
      'month/year': {
        id: 'month/year',
        income: 20000, // cache
        expense: 200, // cache
        year: 2017,
        month: 0,
        transactions: ['uuid-1', 'uuid-2']
      }
    }
  },
  events: {
    active: 'tour2017',
    items: {
      'tour2017': { name: 'Tour 2017', startDate: '1st January', endDate: '31st December' }
    }
  }
};

export default initialState;
