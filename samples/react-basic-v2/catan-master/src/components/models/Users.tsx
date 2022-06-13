/* eslint-disable */

import React, { FC } from 'react';

import Score from './Scores';

class User {
    private name: string = '';
    private score: Score = new Score();

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getScore(): Score {
        return this.score;
    }
}

export default User;