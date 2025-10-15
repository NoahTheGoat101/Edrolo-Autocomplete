setInterval(() => {

  const textarea1 = document.querySelector('[data-test="checklist-question-answer-text-input"]');
  const questionSection = document.querySelector('[data-test="question-s"]');

  const paper = document.querySelector('[data-test="checklist-tick"]')

  if (questionSection && questionSection.getElementsByTagName("li").length > 0) {
    console.log("multiple choice")
    setInterval(() => {
      if (!questionSection) return;

      const questionItems = document.querySelector('[data-test="question-s"]').getElementsByTagName("li");
      const randomIndex = Math.floor(Math.random() * 4);
      questionItems[randomIndex].click();

      questionItems[randomIndex].click();
      if (!questionItems[0] || !questionItems[1]) {
        questionItems[1].click()
      }
      document.querySelector('[data-test="submit-s"]').click()
      setTimeout(() => {
        document.querySelector('[data-test="grokked"]').click()
        setTimeout(() => {

          document.querySelector('[data-test="question-response-nav-button"]').click()

        }, 500);
      }, 500);
    }, 1100);
  } else if (textarea1 || paper) {
    console.log('text')
    setInterval(() => {

      const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
      if (!nativeTextAreaValueSetter) return;
      nativeTextAreaValueSetter.call(textarea1, "Completed in work book");
      textarea1.dispatchEvent(new Event('input', { bubbles: true }));
      textarea1.dispatchEvent(new Event('change', { bubbles: true }));
      setTimeout(() => {
        const submitBtn = document.querySelector('[data-test="submit-l"]');
        if (!submitBtn) {
          setTimeout(() => {
            let input = document.querySelector('[data-test="self-mark-input"]');
            let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;


            let max = document.getElementsByClassName("styles__totalMarks___s5VVp")[0];
            let text = max.textContent;
            text.split("")
            console.log(text[3])

            nativeInputValueSetter.call(input, parseInt(text[3]));

            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            setTimeout(() => {
              document.querySelector('[data-test="grokked"]').click()
              setTimeout(() => {
                for (let i = 0; i < 7; i++) {
                  document.querySelector('[data-test="checklist-tick"]').click()
                }

              }, 50);
              setTimeout(() => {
                document.querySelector('[data-test="question-response-nav-button"]').click()
              }, 50);
            }, 50);
          }, 50);
        } else {
          document.querySelector('[data-test="submit-l"]').click()

        }
      }, 50);
    }, 2000);

  } else {
    console.log("solutions")
    setInterval(() => {
      const w = document.querySelector('[data-test="submit-w"]')
      const a = document.querySelector('[data-test="submit-a"]')

      if (!w) {
        if (!a) {
          setTimeout(() => {
            let input = document.querySelector('[data-test="self-mark-input"]');
            let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
            let max = document.getElementsByClassName("styles__totalMarks___s5VVp")[0];
            let text = max.textContent;
            text.split("")
            console.log(text[3])

            nativeInputValueSetter.call(input, parseInt(text[3]));

            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            setTimeout(() => {
              document.querySelector('[data-test="grokked"]').click()
              setTimeout(() => {
                document.querySelector('[data-test="question-response-nav-button"]').click()
              }, 100);
            }, 100);
          }, 100);

        } else {
          document.querySelector('[data-test="submit-a"]').click()
          setTimeout(() => {
            let input = document.querySelector('[data-test="self-mark-input"]');
            let nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;


            let max = document.getElementsByClassName("styles__totalMarks___s5VVp")[0];
            let text = max.textContent;

            console.log(text[3])

            nativeInputValueSetter.call(input, parseInt(text[3]));

            input.dispatchEvent(new Event('input', { bubbles: true }));
            input.dispatchEvent(new Event('change', { bubbles: true }));
            setTimeout(() => {
              document.querySelector('[data-test="grokked"]').click()
              setTimeout(() => {
                for (let i = 0; i < 7; i++) {
                  document.querySelector('[data-test="checklist-tick"]').click()
                }

              }, 50);
              setTimeout(() => {
                document.querySelector('[data-test="question-response-nav-button"]').click()
              }, 50);
            }, 50);
          }, 50);

        }

      } else {
        document.querySelector('[data-test="submit-w"]').click()
      }
    }, 1600);
  }
}, 5000);



/*
const sleep = (time) => new Promise((resolve, reject) => setTimeout(() => resolve()), time)

console.log("1")
await sleep(100)
console.log("2")
console.log("3")
*/
