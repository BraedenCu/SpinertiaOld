import React from 'react';

const items = [
  {
    title: 'Professional team',
    description:
      'The team power-packed with talented web, graphic and motion designers and software engineers led by skilled project managers whose synergy and sum of experience bring stunning marketing websites to life on a regular basis.',
  },
  {
    title: 'Communication-oriented',
    description:
      'Communication is the key to any successful relationship. At Pixel Point we answer in a matter of hours, eagerly joining requirements discussions and deliver constant updates, making our work as transparent as it possible.',
  },
  {
    title: 'On the same page with you',
    description:
      'Our team gained a strong technical background working in Open Source, DevOps, and SaaS fields. It helps us naturally translate the technological complexity of your project to visually appealing and clear graphics.',
  },
];

const Advantages = () => (
  <section className="safe-paddings mt-52 lg:mt-36 md:mt-28 sm:mt-20">
    <div className="container">
      <h2 className="max-w-[740px] text-4xl font-normal leading-snug lg:max-w-[640px] lg:text-3xl md:max-w-[500px] md:text-2xl sm:max-w-[420px] sm:text-xl">
        It doesn’t have to be like that. Work&nbsp;with&nbsp;Pixel Point to see the difference:
      </h2>
      <ul className="grid-gap-x mt-16 grid grid-cols-3 lg:mt-12 md:mt-10 md:block md:space-y-6 sm:mt-8">
        {items.map(({ title, description }, index) => (
          <li className="flex items-start" key={index}>
            <span className="text-2xl font-semibold leading-snug text-red lg:text-xl sm:text-lg">
              {index + 1}.
            </span>
            <div className="ml-2.5 lg:ml-2 sm:ml-1.5">
              <h3 className="text-2xl font-normal leading-snug lg:text-xl sm:text-lg">{title}</h3>
              <p className="mt-3 lg:mt-2.5 lg:text-base">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Advantages;
