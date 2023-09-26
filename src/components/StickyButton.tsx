import classNames from 'classnames';
import { css } from '../../styled-system/css';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons';
import React, { Ref } from 'react';
import Image from 'next/image';

export default function StickyButton({ className }: { className: string }) {
  const AccordionTrigger = React.forwardRef(
    (
      {
        children,
        className,
        ...props
      }: { children: React.ReactNode; className?: string },
      forwardedRef: Ref<HTMLButtonElement>
    ) => (
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
          className={classNames('AccordionTriggerContent', className)}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <ChevronDownIcon className="ChevronDownIcon" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  AccordionTrigger.displayName = 'AccordionTrigger';

  const AccordionContent = React.forwardRef(
    (
      {
        children,
        className,
        ...props
      }: { children: React.ReactNode; className?: string },
      forwardedRef: Ref<HTMLDivElement>
    ) => (
      <Accordion.Content
        className={classNames('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="AccordionContentText">{children}</div>
      </Accordion.Content>
    )
  );
  AccordionContent.displayName = 'AccordionContent';
  return (
    <Accordion.Root
      type="single"
      defaultValue="item-1"
      className={className}
      collapsible
    >
      <Accordion.Item className="AccordionItem" value="item-1">
        <AccordionTrigger>
          <EnvelopeOpenIcon className="EnvelopeOpenIcon" aria-hidden />
          点击购买
        </AccordionTrigger>
        <AccordionContent>
          <Image
            src="/images/tops-logo_0.jpg"
            width={200}
            height={100}
            layout='cover'
            alt="top-logo"
            className={css({h:'50px',cursor:'pointer'})}
          />
        </AccordionContent>
      </Accordion.Item>
    </Accordion.Root>
  );
}
