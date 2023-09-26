import { Flex, Text, Tabs, Box } from '@radix-ui/themes';
import { css } from '../../styled-system/css';
import Link from 'next/link';

export default function LoginTabs() {
  const TabsRoot = css({ w: '300px', bg: 'white', rounded: 'md' });
  const TabsList = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& button': {
      flex: '1',
      h: '40px',
    },
  });
  const Text = css({
    mt: '0',
    mb: '20px',
    color: 'gray.500',
    fontSize: '15px',
    lineHeight: '1.5',
  });
  const Fieldset = css({
    mb: '15px',
    w: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  });
  const Label = css({
    fontSize: '13px',
    lineHeight: '1',
    mb: '10px',
    color: 'gray.500',
    display: 'block',
  });
  const Input = css({
    flex: ' 1 0 auto',
    rounded: '4px',
    p: '0 10px',
    fontSize: '15px',
    lineHeight: '1',
    color: 'purple.400',
    '--shadowColor': 'colors.purple.200',
    boxShadow: '0 0 0 1px var(--shadowColor)',
    height: '35px',
    _focus: {
      boxShadow: '0 0 0 2px var(--shadowColor)',
    },
  });
  const Button = css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: '4px',
    p: '0 15px',
    fontSize: '15px',
    lineHeight: '1',
    fontWeight: '500',
    h: '35px',
  });
  const green = css({
    bg: 'green.200',
    color: 'green.900',
    _hover: {
      bg: 'green.300',
    },
    _focus: {
      boxShadow: '0 0 0 2px var(--green-7)',
    },
  });
  return (
    <Flex direction="column" align="center">
      <Tabs.Root defaultValue="Login" className={TabsRoot}>
        <Tabs.List className={TabsList}>
          <Tabs.Trigger value="Login">Login</Tabs.Trigger>
          <Tabs.Trigger value="Register">Register</Tabs.Trigger>
        </Tabs.List>
        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="Login">
            <p className={Text}>
              Make changes to your account here. Click save when you&apos;re
              done.
            </p>
            <fieldset className={Fieldset}>
              <label className={Label} htmlFor="name">
                Name
              </label>
              <input className={Input} id="name" defaultValue="Pedro Duarte" />
            </fieldset>
            <fieldset className={Fieldset}>
              <label className={Label} htmlFor="username">
                Username
              </label>
              <input className={Input} id="username" defaultValue="@peduarte" />
            </fieldset>
            <div
              className={css({
                display: 'flex',
                mt: '20px',
                justifyContent: 'flex-end',
              })}
            >
              <button className={`${Button} ${green}`}>
                <Link href={'/posts/home'}>Save changes</Link>
              </button>
            </div>
          </Tabs.Content>
          <Tabs.Content value="Register">
            <p className={Text}>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </p>
            <fieldset className={Fieldset}>
              <label className={Label} htmlFor="currentPassword">
                Current password
              </label>
              <input className={Input} id="currentPassword" type="password" />
            </fieldset>
            <fieldset className={Fieldset}>
              <label className={Label} htmlFor="newPassword">
                New password
              </label>
              <input className={Input} id="newPassword" type="password" />
            </fieldset>
            <fieldset className={Fieldset}>
              <label className={Label} htmlFor="confirmPassword">
                Confirm password
              </label>
              <input className={Input} id="confirmPassword" type="password" />
            </fieldset>
            <div
              className={css({
                display: 'flex',
                mt: '20px',
                justifyContent: 'flex-end',
              })}
            >
              <button className={`${Button} ${green}`}>
                <Link href={'/posts/home'}>Change password</Link>
              </button>
            </div>
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </Flex>
  );
}
