/* eslint-disable */

import React, { FC } from 'react';

class Score {
    private city: number = 0; // 都市
    private settlement: number = 2; // 開拓地
    private traidingRoad: number = 0; // 交易路
    private knight: number = 0; // 騎士力
    private devCard: number = 0; // 発展
    private victoryPoint: number = 0; // 勝利ポイントカード
    private total: number = 0; // 合計
    private maxTraidingRoad: boolean = false; // 最長交易路
    private maxKnight: boolean = false; // 最大騎士力

    public addCity(): void {
        this.city++;
        this.updateTotal();
    }

    public subCity(): void {
        const _city: number = Math.max(0, this.city - 1);
        this.city = _city;
        this.updateTotal();
    }

    public addSettlement(): void {
        this.settlement++;
        this.updateTotal();
    }

    public subSettlement(): void {
        const _settlement: number = Math.max(0, this.settlement - 1);
        this.settlement = _settlement;
        this.updateTotal();
    }

    public addTraidingRoad(): void {
        this.traidingRoad++;
    }

    public subTraidingRoad(): void {
        const _traidingRoad: number = Math.max(0, this.traidingRoad - 1);
        this.traidingRoad = _traidingRoad;
    }

    public getTraidingRoad(): number {
        return this.traidingRoad;
    }

    public addKnight(): void {
        this.knight++;
    }

    public subKnight(): void {
        const _knight: number = Math.max(0, this.knight - 1);
        this.knight = _knight;
    }

    public getKnight(): number {
        return this.knight;
    }

    public addDevCard(): void {
        this.devCard++;
    }

    public subDevCard(): void {
        const _devCard: number = Math.max(0, this.devCard - 1);
        this.devCard = _devCard;
    }

    public addVictoryPoint(): void {
        this.victoryPoint++;
        this.updateTotal();
    }

    public subVictoryPoint(): void {
        const _victoryPoint: number = Math.max(0, this.victoryPoint - 1);
        this.victoryPoint = _victoryPoint;
        this.updateTotal();
    }

    public setMaxTraidingRoad(maxTraidingRoad: boolean): void {
        this.maxTraidingRoad = maxTraidingRoad;
        this.updateTotal();
    }

    public setMaxKnight(maxKnight: boolean): void {
        this.maxKnight = maxKnight;
        this.updateTotal();
    }

    public updateTotal(): void {
        let _total = this.city * 2 + this.settlement + this.victoryPoint;
        if (this.maxTraidingRoad) {
            _total += 2;
        }
        if (this.maxKnight) {
            _total += 2;
        }
        this.total = _total;
    }

    public getTotal(): number {
        return this.total;
    }

}

export default Score;