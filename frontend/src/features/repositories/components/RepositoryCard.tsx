import React from 'react';
import {Card, CardContent, Link, Typography} from "@mui/material";

interface Props {
    title: string,
    repositoryUrl: string,
    owner: string,
    ownerProfileUrl: string,
}

const RepositoryCard: React.FC<Props> = ({title, repositoryUrl, owner, ownerProfileUrl}) => {
    return (
        <Card variant="outlined" style={{margin: '16px'}}>
            <CardContent>
                <Typography variant="h6" gutterBottom>{title}</Typography>
                <Typography>
                    <Link href={repositoryUrl} target="_blank" rel="noopener noreferrer"> Repository</Link>
                </Typography>
                <Typography>
                    Repository's owner:<Link href={ownerProfileUrl} target="_blank" rel="noopener noreferrer">{owner}</Link>
                </Typography>
            </CardContent>
        </Card>
    );
};
export default RepositoryCard;
