/* eslint react/prop-types:0 */

import React from 'react';
import { Trans } from '@lingui/macro';

export default () => (
    <>
        <Trans>Not Found</Trans>
        <Trans>Resource could not be not found. Please check the URL and try again.</Trans>
        <Trans>Internal Server Error</Trans>
        <Trans>The server encountered an unexpected condition which prevented it from fulfilling the request.</Trans>
    </>
);
