import { createStyles } from 'antd-style';

const useStyles = createStyles(({ token }) => {
  return {
    standardFormRow: {
      display: 'flex',
      marginBottom: '16px',
      paddingBottom: '16px',
      borderBottom: '1px dashed @border-color-split',
      ':global': {
        'ant-form-item,    .ant-legacy-form-item': {
          marginRight: '24px',
        },
        'ant-form-item-label,    .ant-legacy-form-item-label': {
          label: { marginRight: '0', color: token.textColor },
        },
        'ant-form-item-label,    .ant-legacy-form-item-label,    .ant-form-item-control,    .ant-legacy-form-item-control':
          {
            padding: '0',
            lineHeight: '32px',
          },
      },
      label: {
        flex: '0 0 auto',
        marginRight: '24px',
        color: token.headingColor,
        fontSize: token.fontSizeBase,
        textAlign: 'right',
        '& > span': {
          display: 'inline-block',
          height: '32px',
          lineHeight: '32px',
          '&::after': { content: "'：'" },
        },
      },
      content: {
        flex: '1 1 0',
        ':global': {
          'ant-form-item,      .ant-legacy-form-item': {
            '&:last-child': {
              marginRight: '0',
            },
          },
        },
      },
    },
    standardFormRowLast: {
      marginBottom: '0',
      paddingBottom: '0',
      border: 'none',
    },
    standardFormRowBlock: {
      ':global': {
        'ant-form-item,    .ant-legacy-form-item,    div.ant-form-item-control-wrapper,    div.ant-legacy-form-item-control-wrapper':
          {
            display: 'block',
          },
      },
    },
    standardFormRowGrid: {
      ':global': {
        'ant-form-item,    .ant-legacy-form-item,    div.ant-form-item-control-wrapper,    div.ant-legacy-form-item-control-wrapper':
          {
            display: 'block',
          },
        'ant-form-item-label,    .ant-legacy-form-item-label': {
          float: 'left',
        },
      },
    },
  };
});

export default useStyles;