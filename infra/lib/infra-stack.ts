import { RemovalPolicy, Stack, StackProps, Tags } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import {
    ApplicationName,
    CloudfrontDistributionId,
    EnvironmentTag,
    OriginAccessIdentityId,
    ProjectTag,
    TenantEnvironment,
    WebsiteBucketId
} from './infra-constants';
import { Distribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';

export class InfraStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const websiteBucket = new Bucket(this, WebsiteBucketId, {
            publicReadAccess: false,
            removalPolicy: RemovalPolicy.DESTROY,
            autoDeleteObjects: true
        });

        const originAccessIdentity = new OriginAccessIdentity(
            this,
            OriginAccessIdentityId
        );
        websiteBucket.grantRead(originAccessIdentity);

        new Distribution(this, CloudfrontDistributionId, {
            defaultBehavior: {
                origin: new S3Origin(websiteBucket, { originAccessIdentity })
            },
            errorResponses: [
                {
                    httpStatus: 404,
                    responsePagePath: '/index.html',
                    responseHttpStatus: 200
                }
            ],
            defaultRootObject: 'index.html'
        });

        Tags.of(this).add(ProjectTag, ApplicationName);
        Tags.of(this).add(EnvironmentTag, TenantEnvironment);
    }
}
