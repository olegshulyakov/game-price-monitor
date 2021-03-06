/*
 * Copyright 2020 Oleg Shulyakov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import styled from "styled-components";

const Title = styled.span`
    margin: 0;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
`;

const Values = styled.p`
    margin: 0;
    letter-spacing: 0.01071em;
`;

interface Props extends React.HTMLProps<any> {
    attribute: string;
    values: string[];
}

const AttributeCard: React.FC<Props> = (props: Props) => {
    if (!props.attribute || !props.values || props.values.length === 0) {
        return <></>;
    }

    return (
        <>
            <Title>{props.attribute}</Title>
            <Values>
                {props.values?.map((value: string) => {
                    return value + " ";
                })}
            </Values>
        </>
    );
};

export default AttributeCard;
