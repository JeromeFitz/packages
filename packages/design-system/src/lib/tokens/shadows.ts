const shadows = {
  0: 'none',
  1: `
        0.5px 1px 1px hsl($colors$shadow / 0.333)
      `,
  2: `
        1px 2px 2px hsl($colors$shadow / 0.333),
        2px 4px 4px hsl($colors$shadow / 0.333),
        3px 6px 6px hsl($colors$shadow / 0.333)
      `,
  3: `
        1px 2px 2px hsl($colors$shadow / 0.2),
        2px 4px 4px hsl($colors$shadow / 0.2),
        4px 8px 8px hsl($colors$shadow / 0.2),
        8px 16px 16px hsl($colors$shadow / 0.2),
        16px 32px 32px hsl($colors$shadow / 0.2)
      `,
  toast:
    '$colors$shadow 0px 10px 38px -10px, $colors$shadowSecondary 0px 10px 20px -15px',
  // toastError: `$colors$error 0px 10px 38px -10px, $colors$error 0px 10px 20px -15px`,
  // toastInfo: `$colors$info 0px 10px 38px -10px, $colors$info 0px 10px 20px -15px`,

  // toastSuccess: `$colors$success 0px 10px 38px -10px, $colors$success 0px 10px 20px -15px`,
  // toastWarning: `$colors$warning 0px 10px 38px -10px, $colors$warning 0px 10px 20px -15px`,
}

export { shadows }
