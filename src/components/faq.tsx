import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  padding: 0 120px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
`;

function FAQ() {
  return (
    <Section>
      <h2>Часто задаваемые вопросы</h2>
      <Grid>
        <article>
          <h3>Где проходят сходки?</h3>
          <p>
            Сходки проходят каждый четверг. Начало сходок в 20:00 и место
            встречи мы обсуждаем в беседе в Viber.
          </p>
        </article>
        <article>
          <h3>Как попасть в беседу в Viber?</h3>
          <p>
            Чтобы попасть в беседу, необходимо приехать на одну из сходок и
            попросить кого-нибудь вас добавить.
          </p>
        </article>
      </Grid>
    </Section>
  );
}

export default FAQ;
