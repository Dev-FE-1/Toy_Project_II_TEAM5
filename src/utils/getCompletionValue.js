const getCompletionValue = (status) => {
  switch (status) {
    case '완료함':
      return 100
    case '취소됨':
      return 0
    case '진행중':
      return Math.floor(Math.random() * 99) + 1
    default:
      return 0
  }
}

export default getCompletionValue
