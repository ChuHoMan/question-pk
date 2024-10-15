export const generateComparisonQuestions = (count: number) => {
    const questions: {
      question: string;
      answer: string;
    }[] = [];
  
    for (let i = 0; i < count; i++) {
      // 生成两个 0 到 20 之间的随机数
      const num1 = Math.floor(Math.random() * 21);
      const num2 = Math.floor(Math.random() * 21);
      
      // 生成问题字符串
      const question = `${num1}a${num2}`;
  
      // 根据大小关系生成答案
      let answer;
      if (num1 > num2) {
        answer = '>';
      } else if (num1 < num2) {
        answer = '<';
      } else {
        i--; // 重新生成问题
        continue;
      }
  
      questions.push({ question, answer });
    }
  
    return questions;
};