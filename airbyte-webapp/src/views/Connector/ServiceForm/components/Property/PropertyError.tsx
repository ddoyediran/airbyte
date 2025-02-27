import React from "react";

import { Text } from "components/base/Text";

import styles from "./PropertyError.module.scss";

export const PropertyError: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => (
  <Text className={styles.errorMessage}>{children}</Text>
);
