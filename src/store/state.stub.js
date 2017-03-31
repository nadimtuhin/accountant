import {
  DEBT, DEBT_COLLECTION, EXPENSE, INCOME, LDRD, LOAN, REPAYMENT,
  SALARY
} from '../constants/terms';

const initialState = {
  category: {
    [EXPENSE]: [LOAN, REPAYMENT, 'transportation'],
    [INCOME]: [DEBT, DEBT_COLLECTION, SALARY],
    [LDRD]: [LOAN, DEBT, REPAYMENT, DEBT_COLLECTION],
    items: {
      [LOAN]: { picture: 'A.png', name: 'Loan', id: LOAN },
      [DEBT]: { picture: 'B.png', name: 'Debt', id: DEBT },
      [REPAYMENT]: { picture: 'B.png', name: 'Repayment', id: REPAYMENT },
      [DEBT_COLLECTION]: { picture: 'B.png', name: 'Debt Collection', id: DEBT_COLLECTION },
      transportation: { picture: 'C.png', name: 'Transportation', id: 'transportation' },
      [SALARY]: { picture: 'D.png', name: 'Salary', id: SALARY },
    }
  },
  wallet: {
    order: ['dbbl', 'cash'],
    items: {
      dbbl: { id: 'dbbl', name: 'DBBL', description: '', openingBalance: 0 },
      cash: { id: 'cash', name: 'CASH', description: '', openingBalance: 0 },
    }
  },
  transactions: {
    'uuid-1': {
      id: 'uuid-1',
      date: '2017/03/22',
      type: EXPENSE,
      categoryId: 'transportation',
      wallet: 'cash',
      amount: 200,
      remark: 'pathao ride to office',
      event: 'tour2017'
    },
    'uuid-2': {
      id: 'uuid-2',
      date: '2017/03/26',
      type: INCOME,
      categoryId: SALARY,
      wallet: 'cash',
      amount: 200000,
      remark: '',
      event: null
    },
  },
  months: {
    '2017/03': {
      id: '2017/03',
      income: 20000, // cache
      expense: 200, // cache
      year: 2017,
      month: 0,
      transactions: ['uuid-1', 'uuid-2']
    }
  },
  event: {
    order: ['tour2017'],
    items: {
      'tour2017': { name: 'Tour 2017', startDate: '1st January', endDate: '31st December' }
    }
  },
  budget: {
    order: ['b-uuid-1'],
    items: {
      'b-uuid-1': {
        category: 'transportation',
        amount: 2000,
        start: 'start/date',
        end: 'end/date',
      }
    }
  },
  savings: {
    order: ['s-uuid-1'],
    items: {
      's-uuid-1': {
        name: 'Kindle',
        description: 'buy kindle in 4 months',
        when: 'every1month',
        amount: 3000
      }
    }
  },
  settings: {
    travelMode: false,
  }
};

export default initialState;
