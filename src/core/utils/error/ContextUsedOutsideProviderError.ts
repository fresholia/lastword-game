import React from 'react';

export class ContextUsedOutsideProviderError extends Error {
  constructor(context: React.Context<any>) {
    super(`${context.displayName || 'Context'} is being used outside of its Provider`);
  }
}
